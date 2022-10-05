import ItemIProps from "../models/response/item.response.model";

const product: ItemIProps = {
    item: {
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
        description: "Telefono celular de gama alta",
        sold_quantity: 12,
    },
    categories: ['TV', 'Silla de ruedas', 'Muebles de cedro'],
};

export default product;