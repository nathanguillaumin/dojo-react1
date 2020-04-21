import React from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1 },
  { id: 2, name: 'produit 2', price: 75, quantity: 2 },
  { id: 3, name: 'produit 3', price: 20, quantity: 5 }
];

/*
Abdel-rahim
Camille
Ikram
Nathan
Armin
*/

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      products: initialProductList
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, productID) {
    console.log(productID);
    console.log( event.target.value);
    const newProducts = this.state.products.map(product => {
      if (product.id === productID) {
        return { ...product, quantity: event.target.value };
      } else {
        return product;
      }
    });
    console.log(newProducts);
    this.setState({ products: newProducts });
  }

  render () {
    const totaux = this.state.products.map(product => (product.price * product.quantity));
    return (
      <div className='App'>
        <h1>Ma commande</h1>
        <table>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix unitaire</th>
              <th>Quantité</th>
              <th>Prix total</th>
            </tr>
          </thead>

          <tbody>

            {this.state.products.map(produit =>
              <tr key={produit.id}>
                <td key={produit.name}>{produit.name}</td>
                <td key={produit.price}>{produit.price}</td>
                <td><input type='number' min='0' onChange={(event) => {this.handleChange(event, produit.id)}} value={produit.quantity} /></td>
                <td key={produit.id}>{produit.price * produit.quantity}</td>
              </tr>)}
          </tbody>
        </table>

        <h3>Montant de la commande: {totaux.reduce((total, currentValue) => total + currentValue)}€</h3>

      </div>
    );
  }
}

export default App;
