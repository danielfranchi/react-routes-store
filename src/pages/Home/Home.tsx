import React from 'react';
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';

import axios from 'axios'
import '../../App.css'

const Home = () => {

  interface Produto{
    id: number      
    title: string    
    price: number 
    description: string  
    category: string 
    image: string
  }

  const [produtos, setProdutos] = React.useState<Produto[]>([])

  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(resposta => setProdutos(resposta.data))
  }, [])

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {produtos.map((item: Produto) => (
        <div key={item.id}>
          <p>{item.category}</p>
          <p>{item.title}</p>
          <img src={item.image} alt={item.image} />
          <p>{item.price}</p>
          <p>{item.description}</p><br/>
          <Link to={`produto/${item.id}`}>Comprar</Link>
          <hr/>
        </div>  
      ))}
    </>
  );
}

export default Home;