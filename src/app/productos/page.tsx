import Link from "next/link";


const Productos= () =>{

    const productoId = 100;

    return(
        <>
            <h1>Lista de productos..</h1>
            <Link href="/productos/1" className="block">Producto 1</Link>
            <Link href="/productos/2" className="block">Producto 2</Link>
            <Link href="/productos/3" className="block">Producto 3</Link>
            <Link href="/productos/4" className="block" replace>Producto 4</Link>
            <Link href={`productos/${productoId}`}>Producto {productoId}</Link>
        </>
    )
}

export default Productos;