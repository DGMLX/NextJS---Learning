'use client'
import { useRouter } from "next/navigation"

const PagarCompra = () =>{
    
    const router=useRouter()

    const handleGoHome = () =>{
        router.push("/")
    }

    return(
        <>
            <h1 className="text-5xl text-center text-white">Pagando la compra de tus productos......</h1>
            <button onClick={handleGoHome}>Volver al inicio</button>
        </>
    )
}

export default PagarCompra