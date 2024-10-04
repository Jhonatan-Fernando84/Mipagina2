import './ProductoComponente.css';

const item = [
  {
    name: "Paracetamol 750 mg Oral 10 tabletas",
    img: "Paracetamol.jpg",
    price:68
  },
  {
    name: "Ibuprofeno 600 mg Oral 10 tabletas",
    img: "Ibuprofeno.jpg",
    price:74
  },
  {
    name: "Aspirina 500 mg 20 Tabletas",
    img: "Aspirina.jpg",
    price:24
  },
]
const ProductoComponente = () => {
  return (
    <>
      <h1>Lista de Medicamentos</h1>
      <b> </b>
      <b>Estos precios estan en peso mexicanos</b>
      <table className="productos">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Imagen</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {item.map((x, index) => (
            <tr key={index}> 
              <td>{x.name}</td>
              <td><img src={`/Img/Producto/${x.img}`} alt={x.name} style={{ width: '120px' }} /></td>
              <td>${x.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default ProductoComponente
