import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="logo" href="/">
            duok duonos!
          </a>
        </div>
        <div>
          <a href="/cart">Krepšelis</a>
          <a href="/signin">Prisijungti</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product}> </Product>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;