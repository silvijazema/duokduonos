import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/">Atgal į visus produktus</Link>
      <div className="row top boxed-content">
      
        <div className="col-1">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Vieneto kaina: ${product.price}</li>
            <li>
              Skanėsto aprašymas:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Kaina</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Ar turime?</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">Taip!</span>
                    ) : (
                      <span className="error">Deja ne :(</span>
                    )}
                  </div>
                </div>
                
              </li>
              <li>
                <button className="primary block">Į krepšelį</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}