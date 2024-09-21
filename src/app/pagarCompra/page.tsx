'use client'
import { useRouter } from "next/navigation"

const PagarCompra = () =>{
    
    const router=useRouter()

    const handleGoHome = () =>{
        router.push("/")
    }

    return(
        <>
            <h1>Pagando la compra de tus productos......</h1>
            <button onClick={handleGoHome}>Volver al inicio</button>
        </>
    )
}

export default PagarCompra