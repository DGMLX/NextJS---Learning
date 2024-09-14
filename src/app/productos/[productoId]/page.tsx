
const ProductoId = ({params}:{params:{productoId:string}}) =>{
    return(
        <h1>Producto con Id {params.productoId}</h1>
    )
}

export default ProductoId