import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/categories/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/product/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home