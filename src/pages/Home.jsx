import React , {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from "../components/Product"
import Hero from '../components/Hero';

const Home = () => {
  const {product} = useContext(ProductContext);
  

  return (
    <div>
    <Hero />
      <section className='py-16 '>
        <div className='container mx-auto'>
        <h2 className='font-semibold flex items-center justify-center text-4xl mb-2 font-serif'>Our Top Rated Product</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {product.map((product) =>{
              return <Product key={product.id} product={product} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home