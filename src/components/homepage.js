import React from 'react';

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="page">
        <header className="hero bg-gray-800 text-white">
          <div className="hero-container container mx-auto px-4 py-12">
            <div className="hero-text text-center">
              <h1 className="text-4xl font-bold">simple Bites</h1>
              <h4 className="text-lg">flavour, simplified</h4>
            </div>
          </div>
        </header>
        <section className="recipes-container container mx-auto px-4 py-8 flex">
          <div className="w-1/4">
            <div className="tags-container">
              <h4 className="text-xl font-bold">recipes</h4>
              <div className="tags-list flex flex-col gap-2">
                <a href="/tag-template" className="text-blue-500 hover:underline">Lorem Ipsum (1)</a>
                <a href="/tag-template" className="text-blue-500 hover:underline">Lorem Ipsum (1)</a>
                <a href="/tag-template" className="text-blue-500 hover:underline">Lorem Ipsum (1)</a>
                <a href="/tag-template" className="text-blue-500 hover:underline">Lorem Ipsum (1)</a>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className="recipes-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              <a className="recipe" href="/single-recipe">
                <div className="relative">
                  <i className="fas fa-heart absolute top-2 right-2 text-red-500"></i>
                  <img
                    src="/receptphoto.png"
                    className="img recipe-img"
                    alt=""
                  />
                </div>
                <h5 className="text-xl font-bold">Lorem Ipsum</h5>
                <p className="text-gray-600">Prep : 15min | Cook : 5min</p>
              </a>
             
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
