import comentarios from "../data";


export async function GET(_request:Request,{params}:{params:{reviewId:string}}){
    const comentario = comentarios.filter(com=>com.id===params.reviewId)
    return Response.json(comentario[0])
}


export async function PATCH(request:Request,{params}:{params:{reviewId:string}}){


}

export async function DELETE(request:Request,{params}:{params:{reviewId:string}}){
    

}