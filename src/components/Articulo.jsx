import "./Articulo.css";
const Articulo = ({ articulo }) => {
  return (
    <div className="contenedor">
      <img className="img" src={articulo.image} alt={articulo.description} />
      <div>
        <h2 className="titulo">{articulo.title}</h2>
        <p className="descripcion">{articulo.description}</p>
        <p className="precio">$ {articulo.price}</p>
      </div>
    </div>
  );
};

export default Articulo;
