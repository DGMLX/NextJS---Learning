import Link from "next/link";
import productos from "./data";

const Productos= () =>{

    const productoId = 100;

    return(
        <>
            <h1 className="text-5xl text-center text-white">Lista de productos..</h1>
            
            {
                productos.map(prod=>(
                    
                    <div className="p-5 text-xl text-white underline" key={prod.id}>
                        <Link href={`/productos/${prod.id}`}>{prod.nombre}</Link>

                    </div>
                    
                ))
            }
{/* 
            <Link href="/productos/1" className="block">Producto 1</Link>
            <Link href="/productos/2" className="block">Producto 2</Link>
            <Link href="/productos/3" className="block">Producto 3</Link>
            <Link href="/productos/4" className="block" replace>Producto 4</Link>
            <Link href={`productos/${productoId}`}>Producto {productoId}</Link> */}
        </>
    )
}

export default Productos;