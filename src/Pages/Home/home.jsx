import { useState, useEffect } from "react"
import Layout from "../../Components/Layout/Layout.jsx"
import Card from "../../Components/Cards/Card.jsx"
import ProducDetail from "../../Components/productDetail/productDetail.jsx"

function Home() {

    const [items, setItems] = useState(null)

    const [error, setError] = useState(null); // Para capturar errores

    useEffect(() => {
        console.log('Ejecutando fetch...');
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos obtenidos de la API: ', data);
                setItems(data);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
                setError(error.message);
            });
    }, []);

    return (    
      <Layout>
        <h1 className="font-semibold text-xl">Home</h1>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-6'>
          {
            items?.map(item => (                 //Arreglo que itera por cada item que llega de la api, una card, asi mismo le manda la data al componente Card
              <Card key={item.id} data={item} />
            ) 
            )
          }
        </div>
        <ProducDetail></ProducDetail>
      </Layout>
    )
  }
  
  export default Home
  