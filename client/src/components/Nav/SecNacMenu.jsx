import {
    FaTshirt,
    FaCarSide,
    FaGift,
    FaClock,
    FaStar,
    FaTags
} from 'react-icons/fa';

const secdata = [
    {
        id: 1,
        name: 'Clothing & Fashion',
        link: '/categories/fashion',
        icon: FaTshirt,
    },
    {
        id: 2,
        name: 'Automobile',
        link: '/categories/automobile',
        icon: FaCarSide,
    },
    {
        id: 3,
        name: 'Bundle Deals',
        link: '/deals/bundles',
        icon: FaGift,
    },
    {
        id: 4,
        name: 'Weekly Deals',
        link: '/deals/weekly',
        icon: FaClock,
    },
    {
        id: 5,
        name: 'Top Products',
        link: '/top-products',
        icon: FaStar,
    },
    {
        id: 6,
        name: 'Discounts',
        link: '/deals/discounts',
        icon: FaTags,
    },
];

export { secdata };
