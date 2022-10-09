import axios from 'axios'
import { toNormalForm } from '../utilities/format-string'
import callEndpoint from '../utilities/call-endpoint'
import errorsStatusCode from '../utilities/error-codes'

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

export default async function productsResult(req, res) {
    if (!req.query.q) {
        res.status(400).json({ message: 'Missing param' })
        return
    }

    // the meli api is breack if a query params have a accent
    const query = toNormalForm(req.query.q)

    const response = await callEndpoint(fetchProducts(query)).catch((e) => e.response)

    const { data, status } = response
    const errorStatus = errorsStatusCode(status)
    if (errorStatus) {
        errorStatus(res)
    }

    const productItems = parseProducts(data)
    const categories = parseCategories(data)

    res.status(200).json({ items: productItems, categories })
}
