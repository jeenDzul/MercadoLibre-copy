import ItemsIProps from "../models/response/items.response.model";

const products: ItemsIProps = {
    items: [{
        id: 'ASDG',
        title: 'TV Samsung',
        price: {
            amount: 200,
            decimal: null,
            currency: 'USD',
        },
        thumbnail: 'https://via.placeholder.com/150',
        city_name: 'Petaling Jaya',
        free_shipping: true,
    }, {
        id: '"SDSDF"',
        title: 'Silla de ruedas',
        price: {
            amount: 500,
            decimal: 50,
            currency: 'USD',
        },
        thumbnail: 'https://via.placeholder.com/150',
        city_name: 'Benito Juarez',
        free_shipping: false,
    }, {
        id: 'ASDADA',
        title: 'Muebles de cedro',
        price: {
            amount: 300,
            decimal: null,
            currency: 'USD',
        },
        thumbnail: 'https://via.placeholder.com/150',
        city_name: 'Sandakan',
        free_shipping: true,
    }],
    categories: ['TV', 'Silla de ruedas', 'Muebles de cedro'],
}


export default products;