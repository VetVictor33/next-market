"use client"
import ActionAreaCard from "@/components/ActionAreaCard/ActionAreaCard"
import { Button, Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "react-use";
import { productsMock } from "@/database/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useLocalStorage('products');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(products.length);
  const router = useRouter();
  if (!products?.length) setProducts(productsMock);

  const removeProducts = (id) => {
    const localProducts = [...products];
    const filteredLocalProducts = localProducts.filter(product => product.id !== +id);
    setProducts(filteredLocalProducts);
    handleMaxPage(filteredLocalProducts.length)
  }

  const handlePagination = (e, page) => {
    setPage(page)
  }

  function handleMaxPage(length) {
    if (length % 2 > 0) {
      const max = length <= 2 ? 1 : (products.length + 1) / 2;
      setMaxPage(max)
    } else {
      const max = length <= 2 ? 1 : (products.length) / 2;
      setMaxPage(max)
    }
  }

  const handleGoToAddProducts = () => {
    router.push('/add-products');
  }

  useEffect(() => {
    handleMaxPage(products.length);
  }, [products])

  return (
    <main className="Home">
      <div className="subheader-div">
        <h3 className="title">Leguminosas & Hortaliças</h3>
        <div className="subtitle-div">
          <p className="subtitle">Seus podrutos</p>
          <Button className='bt' variant="contained"
            onClick={handleGoToAddProducts}
          >Adicionar produto</Button>
        </div>
      </div>
      {maxPage > 1 &&
        <>
          <Pagination className="pagination" count={maxPage} page={page} color="primary" onChange={handlePagination} />
        </>
      }
      <div>
        {products?.length ?
          <div className="visible-products">
            <div className="products" style={{ transform: `translateX(${(page - 1) * -90}vw)` }}>
              {products.map(item => (
                <ActionAreaCard key={item.id}
                  item={item}
                  removeProducts={removeProducts}
                  length={products.length} />
              ))}
            </div>
          </div>
          :
          <h1>Sem mais</h1>
        }
      </div>
    </main>
  )
}
