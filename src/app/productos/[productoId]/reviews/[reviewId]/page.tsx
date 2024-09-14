import { notFound } from "next/navigation";

const ReviewId = ({params}:{params:{productoId:string,reviewId:string}}) =>{

    if(parseInt(params.reviewId) > 1000){
        notFound();
    }

    return(
        <h1>Review {params.reviewId} del producto {params.productoId}</h1>
    )
}

export default ReviewId;