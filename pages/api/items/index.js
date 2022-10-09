import axios from 'axios'

const callEndpoint = async (axiosCall) => {
    let result = {}
    result = await axiosCall.call
    return result
}

const fetchProducts = (query) => ({ call: axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=50`) })

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

const parseProducts = (response) => {
    const { results = [] } = response

    if (results.length <= 0) {
        return results
    }

    return response.results.map((result) => {
        const price = parsePrice(result)
        return {
            id: result.id,
            title: result.title,
            price: {
                currency: result.currency_id,
                amount: price.amount,
                decimals: price.decimals,
            },
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping,
            city_name: result.address.city_name,
        }
    })
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
    if (!req.query.q) {
        res.status(400).json({ message: 'Missing param' })
        return
    }

    const response = await callEndpoint(fetchProducts(req.query.q)).catch((e) => e.response)

    const { data, status } = response
    const errorStatus = errorsStatusCode(status)
    if (errorStatus) {
        errorStatus(res)
    }

    const productItems = parseProducts(data)
    const categories = parseCategories(data)

    res.status(200).json({ item: productItems, categories })
}
