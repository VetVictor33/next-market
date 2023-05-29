"use client"
import ActionAreaCard from "@/components/ActionAreaCard/ActionAreaCard"
import Lettuce from '@/public/assets/food/lettuce.jpg';
import Tomato from '@/public/assets/food/tomato.jpg';
import BlackBeans from '@/public/assets/food/black-bean.jpg';
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const productsMock = [
    { id: 1, name: 'alface', price: '0.99', type: 'greenery', description: 'alfaces verdinhos', src: Lettuce },
    { id: 2, name: 'tomate', price: '3.99', type: 'vegetable', description: 'tomates vermelinhos', src: Tomato },
    { id: 3, name: 'feijão preto', price: '5.99', type: 'vegetable', description: 'feijões pretinhos', src: BlackBeans }
  ]

  const handleClick = () => {
    router.push('/add-products');
  }

  return (
    <main className="Home">
      <div className="subheader-div">
        <h3 className="title">Leguminosas & Hortaliças</h3>
        <div className="subtitle-div">
          <p className="subtitle">Seus podrutos</p>
          <Button className='bt' variant="contained"
            onClick={handleClick}
          >Adicionar produto</Button>
        </div>
      </div>
      <div className="products">
        {productsMock.length ?
          productsMock.map(item => (
            <ActionAreaCard item={item} />
          ))
          :
          <h1>Sem mais</h1>
        }
      </div>
    </main>
  )
}
