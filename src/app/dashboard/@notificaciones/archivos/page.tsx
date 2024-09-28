import Card from "@/components/Card"
import Link from "next/link"


const Archivos = () =>{
    return(
        <>
            <Card>
                <p>Archivos</p>
                <Link href="/dashboard">Notificaciones</Link>
            </Card>
        </>
    )
}

export default Archivos