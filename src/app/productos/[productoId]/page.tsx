'use client'

import { useRouter } from "next/navigation";

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

    return(
        <>
            <h1>Producto con Id {params.productoId}</h1>
            <button onClick={handleBuyProduct}>Comprar</button>
        </>
    )
}

export default ProductoId