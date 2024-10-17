//estilos del boton
const BtnCategoria = ({ texto, categoria, funcionPadre }) => {
  const handleSetCategoria = () => {
    funcionPadre(categoria);
  };

  return <button onClick={handleSetCategoria}>{texto}</button>;
};

export default BtnCategoria;
