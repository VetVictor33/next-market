"use client"
import ActionAreaCard from "@/components/ActionAreaCard/ActionAreaCard"
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "react-use";
import { productsMock } from "@/database/data";

export default function Home() {
  const [products, setProducts] = useLocalStorage('products');
  const router = useRouter();
  if (!products?.length) setProducts(productsMock);

  const removeProducts = (id) => {
    const localProducts = [...products];
    const filteredLocalProducts = localProducts.filter(product => product.id !== +id);
    setProducts(filteredLocalProducts);
  }

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
        {products?.length ?
          products.map(item => (
            <ActionAreaCard key={item.id} item={item} removeProducts={removeProducts} />
          ))
          :
          <h1>Sem mais</h1>
        }
      </div>
    </main>
  )
}
