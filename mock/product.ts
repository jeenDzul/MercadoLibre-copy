import ItemIProps from "models/response/item.response.model";

const product: ItemIProps = {
    item: {
        id: 'ASDG',
        title: 'Iphone 14 pro max',
        price: {
            amount: 200,
            decimal: null,
            currency: 'USD',
        },
        picture: 'https://via.placeholder.com/150',
        city_name: 'Cancún',
        free_shipping: true,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        sold_quantity: 12,
    },
    categories: ['Celulares', 'Apple', 'Iphone'],
};

export default product;