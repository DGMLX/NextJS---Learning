import comentarios from "../data";

export async function GET(){
    return Response.json(comentarios)
}

export async function POST(request:Request){
    const texto = await request.json()
    const idComentarioNuevo = comentarios.length+1
    const nuevoComentario = {
        id:idComentarioNuevo.toString(),
        text:texto.text
    };
    comentarios.push(nuevoComentario)
    return new Response(JSON.stringify(nuevoComentario),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })
}

