//estilos del boton
const BtnCategoria = ({ texto, categoria, funcionPadre }) => {
  const handleSetCategoria2 = () => {
    funcionPadre(categoria);
  };

  return <button onClick={handleSetCategoria2}>{texto}</button>;
};

export default BtnCategoria;
