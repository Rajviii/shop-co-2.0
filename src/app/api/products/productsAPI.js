import product1 from '../../../assets/images/product11.png';
import product2 from '../../../assets/images/product12.png';
import product3 from '../../../assets/images/product13.png';
import product4 from '../../../../public/assets/product2.png';
import product5 from '../../../../public/assets/product3.png';
import product6 from '../../../../public/assets/product4.png';
import product8 from '../../../../public/assets/product6.png';
import product7 from '../../../../public/assets/product5.png';
import product9 from '../../../../public/assets/product7.png';
export const fetchProducts = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image: product1,
      price: 145,
      rating: 3.5,
      category: "T-shirts",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      image: product2,
      price: 180,
      rating: 4.5,
      category: "T-shirts",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      image: product3,
      price: 120,
      originalPrice: 160,
      discount: "25%",
      rating: 5.0,
      category: "T-shirts",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      image: product4,
      price: 240,
      originalPrice: 260,
      discount: "20%",
      rating: 3.5,
      category: "Jeans",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      image: product5,
      price: 180,
      rating: 4.5,
      category: "Shirts",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      image: product6,
      price: 130,
      originalPrice: 160,
      discount: "20%",
      rating: 4.0,
      category: "T-shirts",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      image: product7,
      price: 212,
      originalPrice: 232,
      discount: "20%",
      rating: 5.0,
      category: "Shirts",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      image: product8,
      price: 145,
      rating: 4.0,
      category: "T-shirts",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      image: product9,
      price: 80,
      rating: 3.0,
      category: "Shorts",
    },
  ]);
}
