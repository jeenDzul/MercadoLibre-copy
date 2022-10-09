import axios from 'axios'
import callEndpoint from '../utilities/call-endpoint'
import errorsStatusCode from '../utilities/error-codes'

const fetchProduct = (param) => ({ call: axios.get(`https://api.mercadolibre.com/items/${param}`) })
const fetchProductDetail = (productId) => ({ call: axios.get(`https://api.mercadolibre.com/items/${productId}/description`) })
const fetchProductCategories = (categoryId) => ({ call: axios.get(`https://api.mercadolibre.com/categories/${categoryId}`) })

const parseCategories = (response) => {
    const categories = response?.path_from_root ?? []
    return categories.map((path) => path.name) ?? []
}

const parsePrice = (item) => {
    const priceSeparator = item.price.toString().split('.')
    const amount = Number(priceSeparator[0] ?? 0)
    const decimals = priceSeparator[1] ? Number(priceSeparator[1]) : null
    return {
        amount,
        decimals,
    }
}

const parseProduct = (response) => {
    const price = parsePrice(response)
    return {
        id: response.id,
        title: response.title,
        price: {
            amount: price.amount,
            decimals: price.decimals,
            currency: response.currency_id,
        },
        picture: response.pictures[0].secure_url,
        condition: response.condition,
        free_shiping: response.shipping.free_shipping,
        sold_quantity: response.sold_quantity,
        description: response.description ?? '',
        city_name: response.seller_address.city.name,
    }
}

export default async function productsResult(req, res) {
    const { id: productId } = req.query

    if (!productId) {
        res.status(400).json({ message: 'Missing param' })
    }

    const productResponse = await callEndpoint(fetchProduct(productId))
        .catch((e) => e.response)
    const productDetailResponse = await callEndpoint(fetchProductDetail(productId))
        .catch((e) => e.response)

    const { data: product, status: statusProductResponse } = productResponse
    const { data: productDetail, status: statusProductDetailResponse } = productDetailResponse

    const errorProductResponse = errorsStatusCode(statusProductResponse)
    const errorProductDetailResponse = errorsStatusCode(statusProductDetailResponse)

    if (errorProductResponse) {
        errorProductResponse(res)
    }

    const categoriesResponse = await callEndpoint(fetchProductCategories(product?.category_id))
        .catch((e) => e.response)
    let categories = []
    if (categoriesResponse?.data != null) {
        categories = parseCategories(categoriesResponse.data)
    }

    let productData = { ...parseProduct(product) }

    if (!errorProductDetailResponse) {
        const { plain_text: productDescription = '' } = productDetail ?? {}
        productData = { ...productData, description: productDescription }
    }

    res.status(200).json({ item: productData, categories })
}
