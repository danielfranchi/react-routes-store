import React from 'react';
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

const Produto = () => {

  interface Produto{
    id: number      
    title: string    
    price: number 
    description: string  
    category: string 
    image: string
  }

  const [item, setItem] = React.useState<Produto>()
  const params = useParams<any>()

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
     .then(resposta => setItem(resposta.data))
  }, [params.id])

  return (
    <>
      <Helmet>
        <title>Produtos</title>
      </Helmet>

      <div>
        <p>{item?.category}</p>
        <p>{item?.title}</p>
        <img src={item?.image} alt={item?.title}/>
        <p>{item?.price}</p>
        <p>{item?.description}</p>
      </div>
    </>
  );
}

export default Produto;