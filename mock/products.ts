import ItemsIProps from "models/response/items.response.model";

const products: ItemsIProps = {
    items: [{
        id: 'ASDG',
        title: 'Iphone 11',
        price: {
            amount: 200,
            decimal: null,
            currency: 'USD',
        },
        thumbnail: 'https://via.placeholder.com/150',
        city_name: 'México',
        free_shipping: true,
    }, {
        id: '"SDSDF"',
        title: 'Iphone XR',
        price: {
            amount: 500,
            decimal: 50,
            currency: 'USD',
        },
        thumbnail: 'https://via.placeholder.com/150',
        city_name: 'Merida',
        free_shipping: false,
    }, {
        id: 'ASDADA',
        title: 'Iphone 6',
        price: {
            amount: 300,
            decimal: null,
            currency: 'USD',
        },
        thumbnail: 'https://via.placeholder.com/150',
        city_name: 'Cancún',
        free_shipping: true,
    }],
    categories: ['Celulares', 'Apple', 'Iphone'],
}


export default products;