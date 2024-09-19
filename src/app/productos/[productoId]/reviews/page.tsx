import {Metadata} from "next";

type Props={
    params:{
        productoId:string
    }
}

export const generateMetadata= ({params}:Props):Metadata=> {
    return {
        title:{
            absolute:`Review del producto ${params.productoId}`
        }
    }
}



const ReviewsProducto = ({params}:Props) =>{
    return(
        <h1>Reviews del producto {params.productoId}</h1>
    )
}

export default ReviewsProducto