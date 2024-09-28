import Card from "@/components/Card"
import Link from "next/link"


const Notificaciones = () =>{
    return(
        <>
            <Card>
                <p>Notificaciones</p>
                <Link href="/dashboard/archivos">Archivos</Link>
            </Card>
        </>
    )
}

export default Notificaciones