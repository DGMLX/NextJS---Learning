'use client'

import { useRouter } from "next/navigation";
import productos from "../data";

type Props={
    params:{
        productoId: string
    }
}


const ProductoId = ({params}:Props) =>{
    const router = useRouter()

    const handleBuyProduct = () =>{
        console.log(`Comprando producto ${params.productoId}`)
        router.push("/pagarCompra");
    }

    const producto = productos.filter(prod =>prod.id === params.productoId)
    console.log(producto)
    return(
        <>
            <h1 className="text-white text-2xl p-5">{producto[0].nombre}</h1>
            <p className="text-xl text-white p-3 font-bold">${producto[0].precio}</p>
            <button onClick={handleBuyProduct}>Comprar</button>
        </>
    )
}

export default ProductoId