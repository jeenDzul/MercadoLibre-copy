import axios from 'axios'

const callEndpoint = async (axiosCall) => {
    let result = {}
    result = await axiosCall.call
    return result
}

const fetchProduct = (id) => ({ call: axios.get(`https://api.mercadolibre.com/items/${id}`) })
const fetchProductDetail = (id) => ({ call: axios.get(`https://api.mercadolibre.com/items/${id}/description`) })

const parseCategories = (response) => {
    const [firstFilterElement] = response?.filters ?? []
    const [firtValueElement] = firstFilterElement?.values ?? []
    const { path_from_root: pathFromRoot } = firtValueElement ?? {}
    if (!pathFromRoot) {
        return []
    }
    const categories = pathFromRoot.map((path) => path.name) ?? []
    return categories
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

function errorsStatusCode(code) {
    function Api400Error(res) {
        return res.status(400).json({ message: 'Bad Request' })
    }

    function Api404Error(res) {
        return res.status(404).json({ message: 'Service not found' })
    }

    function Api500Error(res) {
        return res.status(500).json({ message: 'Server Error' })
    }
    const statusCode = {
        400: Api400Error,
        404: Api404Error,
        500: Api500Error,
    }
    return statusCode[code]
}

export default async function productsResult(req, res) {
    const { id: productId } = req.query

    if (!productId) {
        res.status(400).json({ message: 'Missing param' })
    }

    const productResponse = await callEndpoint(fetchProduct(productId)).catch((e) => e.response)
    const productDetailResponse = await callEndpoint(fetchProductDetail(productId))
        .catch((e) => e.response)

    const { data: product, status: statusProductResponse } = productResponse
    const { data: productDetail, status: statusProductDetailResponse } = productDetailResponse

    const errorProductResponse = errorsStatusCode(statusProductResponse)
    const errorProductDetailResponse = errorsStatusCode(statusProductDetailResponse)

    if (errorProductResponse) {
        errorProductResponse(res)
    }

    let productData = { ...parseProduct(product) }

    if (!errorProductDetailResponse) {
        const { plain_text: productDescription = '' } = productDetail ?? {}
        productData = { ...productData, description: productDescription }
    }

    res.status(200).json({ ...productData })
}
