
const ReviewsProducto = ({params}:{params:{productoId:string}}) =>{
    return(
        <h1>Reviews del producto {params.productoId}</h1>
    )
}

export default ReviewsProducto