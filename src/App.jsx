import { useState, useEffect } from "react";
import "./App.css";
import Articulo from "./Articulo";
import BtnCategoria from "./BtnCategoria";

function App() {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState("Todas");
// "electronics" "jewelery" "men's clothing" "women's clothing"

  const handleSetCategoria =(categoriaHijo)=>{
    setCategoria(categoriaHijo)
    console.log(categoria)
  }

  useEffect(() => {
    let url=""
    if(categoria==="Todas"){
      url="https://fakestoreapi.com/products"
    }else{
      url =`https://fakestoreapi.com/products/category/${categoria}`
    }
    
    async function fetchBack(){
      const response = await fetch(url)
      const data =await response.json()
      console.log(data)
      setProductos(data)
    }
    fetchBack()
  }, [categoria]);

  //crear componente para filtrar
  //cambiar el useeffect para que tenga en cuenta el filtro

  return (
    <>
    <h1>Productos</h1>
    <BtnCategoria texto={"electronica"} categoria={"electronics"} funcionPadre={handleSetCategoria}/>
    {productos.map((producto)=>( <Articulo key={producto.id} articulo={producto}/>))}
    
    </>
  );
}

export default App;
