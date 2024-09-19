import {Metadata} from "next";

type Props={
    params:{
        productoId: string
    }
}

export const generateMetadata = ({params}:Props) : Metadata =>  {
    return{
        title:`Iphone ${params.productoId}`
    }
}


const ProductoId = ({params}:Props) =>{
    return(
        <h1>Producto con Id {params.productoId}</h1>
    )
}

export default ProductoId