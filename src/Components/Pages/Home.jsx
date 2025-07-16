import React, { useEffect } from 'react'
import { categoriesData } from '../../Constant/categoriesData'
import InfoSection from '../InfoSection';
import CategoriesSection from '../CategoriesSection';
import { setProducts } from '../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { topProductItems } from '../../Constant/topProductItems';
import ProductCard from '../productCard';
import Shop from './Shop';

const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  useEffect(() => {
    dispatch(setProducts(topProductItems));
  },[])

  return (
    <div>
      <div className="bg-white mt-2 md:px-16 lg:px-24 py-4">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-4">
          <div className="w-full md:w-3/12">
            {/* Display the categories */}
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BT CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {categoriesData.map(({ id, category }) => (
                <div key={id}>
                  <li className="flex items-center text-sm font-medium">
                    <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                    {category}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          {/* Display the image */}
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img
              src="/Images/hero-imG.jpg"
              alt="hero-img"
              className="w-full h-full"
            />
            <div className="absolute top-16 left-8">
              <p className="text-gray-600 mb-4">Shop With Juliet</p>
              <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS+ PRODUCTS
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategoriesSection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop/>
    </div>
  );
}

export default Home
