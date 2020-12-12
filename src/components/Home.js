import React from 'react';
import LeaveImage from '../images/pexels-aditya-aiyar-1407305.jpg';

const Home = () => {
    return (
        <main>
        <img
          src={LeaveImage}
          alt="Monstera Leaves"
          className="absolute object-cover w-full h-full"
        />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
          <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
            Aloha. I'm Rakesh D R.
          </h1>
        </section>
      </main>
    )
}

export default Home
