import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

      <section className='container '>
        <div className='p-5 mt-[8rem] mx-[12rem] text-center bg-light-dark rounded-2xl'>
          <h1 className='text-light'>
            Stock Prediction Portal
          </h1>
          <p className='text-light lead'>A stock prediction app is an application that tries to predict future stock prices or market trends using historical data, technical indicators, news, or machine learning models.</p>

          <Link className='btn btn-outline-info' to ='/login'>Login</Link>
          

        </div>

      </section>

    </>
  )
}

export default Home