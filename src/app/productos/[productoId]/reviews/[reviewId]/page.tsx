'use client'
import { notFound } from "next/navigation";

const ReviewId = ({params}:{params:{productoId:string,reviewId:string}}) =>{

    const numeroAzar = Math.random()*10;
    console.log(numeroAzar)
    if(numeroAzar > 5){
        throw new Error("Error en la busqueda del review.")
    }

    return(
        <h1>Review {params.reviewId} del producto {params.productoId}</h1>
    )
}

export default ReviewId;