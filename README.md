Learned
- Routing fundamentals
- Nested Routes
- Dynamic Routes ([folderName])
- Dynamic Nested Routes ([folderName1]/folder/[folderName2])
- Catch-all segments ([...slug] / [[...slug]])

- Not found page
    - Pagina no encontrada personalizada
    - not-found.tsx

- File colocation
- Private folders (_folderName, example : _lib)
- Route Groups ((folderName)--> ignora el nombre de la carpeta)
- Layouts (layout.tsx)
- Nested Layouts
- Route Group Layout

- Routing metadata (import {Metadata} from "next")
    - Static metadata object
    - Dynamic generateMetadata function
        - export const generateMetadata = ({params}:Props):Metadata =>{
                return {
                    title:`Producto ${params.productoId}`
                } 
        }
    - We can't use both.

- Title metadata
    - Can be only a String
    - Can be an Object
        -Title:{
            absolute:'rutas hijas ignoran el template',
            default:'title por defecto, se traspasa a rutas hijas en caso de no tener el propio',
            template:'patrón que combina el template con el title de rutas hijas'
        }

- Link component Navigation
    - import Link from "next/link"
    - Si el <Link href="/Ruta" replace>NombreRuta</Link> incluye el atributo replace, elimina el historial de navegación y devuelve a "/"

- Active Links (usePathname)
    - import {usePathname} from "next/navigation";
    - Creamos en layout una constante que contenga un [] con un todas las rutas: clave, valor: {nombre:'Home',href:'/'}...
    - const pathname = usePathname();
    - Dentro del map que recorre las rutas [] creamos const isActive = pathname.startsWith(link.href)
    - Validar con ternario en className y agregar clase tailwind correspondiente.
    - usar 'use client'

- Navigating Programmatically (useRouter)
    - import {useRouter} from "next/navigation";
    - const router = useRouter()
    - En un boton agregar onClick = {funcion}
    - En la funcion podemos poner:
        - router.push("/ruta") ---> Redirecciona a esa ruta
        - router.back() ---> Vuelve a la anterior ruta del historial de navegación
        - router.forward() ---> Navega a la siguiente página.
    - usar 'use client'

- Templates (template.tsx)
    - Recrea los elementos del DOM
    - El estado no se traspasa a otras rutas hijas
    - Nueva instancia del componente (renderiza su código)
    - Evita pasar información de estado a otras rutas hijas que no lo necesitan

- Loading UI (loading.tsx)

- Error handling (error.tsx)
    - Lanzar un error para ver su funcionamiento throw new Error('Mensaje del error')
    - npm run build ... npm run start --> para ver el proyecto en producción.
    - componente error creado en error.tsx puede recibir como props ({error}:{error:Error}) y podemos retornar el mensaje de error {error.message}

- Recovering from errors
    - error.tsx nos ofrece una funcion para volver a ejecutar la carga de la página para ver si se soluciona el error
    - En props pasamos ({error,reset}:{error:Error,reset:()=>void})
    - En un boton ejecutar un onClick={reset}
    - Pasar 'use client' a la página que produce el error.

- Handling errors in Nested Routes
    - Si se produce un error en una ruta hija y el error.tsx esta en el padre, este error.tsx se traspasa y se ejecuta también para rutas hijas

- Handling errors in Layouts
    - Si se produce un error en layout y el error.tsx esta al mismo nivel, este no lo maneja. La solución es pasar el error.tsx al padre del layout para poder manejar el error producido en layout.tsx

- Parallel Routes (Uso de slots @folderName)  --> estructura avanzada de rutas
    - Permite el renderizado simultaneo de multiples páginas en un mismo layout
    - Si queremos que una ruta /dashboard se visualize: userAnalitica , metricaGanancia y notificaciones podemos usar la estructura de componentes y importar c/componente en el layout.tsx de la carpeta dashboard
        - import {UserAnalisis} from "@/components/UserAnalisis"
        - import {metricaGanancia} from "@/components/metricaGanancia"
        - import {Notificaciones} from "@/components/notificaciones"
    y en el return importamos c/componente aparte del {children}
    - Esta forma funciona, pero usar parallel routes es mucho mejor:
        - Es definida por slots @folderName y cada slots es pasado como props al layout correspondiente.
            dashboard
                @notificaciones
                    page.tsx
                @users
                    page.tsx
                @metrica
                    page.tssx
                page.tsx
                layout.tsx ---> definimos los slots como props
    - Definimos los slots en los props de layout
        - export default function({children,users,notificaciones,metrica}:{children:React.ReactNode, users:React.ReactNode, notificaciones:React.ReactNode,metrica:React.ReactNode})
        - Retornamos los slots
            return(
                <>
                    <div>{children}</div>
                    <div>{users}</div>
                    <div>{metrica}</div>
                    <div>{notificaciones}</div>
                </>
            )
    - Podemos crear una carpeta components dentro de src y crear un card.tsx .. const card = ({children}:{children:React.ReactNode}){
        const cardStyle = {
            ...estilosCss
        }
        return(
            <div stye={cardStyle}>{children}</div>
        )
    }
    - Envolvemos el contenido de cada paga.tsx en este <Card> que creamos
    - Slots no afectan las Url  /dashboard/users ... /dashboard/@users  ----> no funciona
    - Beneficios de trabajar con slots      
        - Código manejable
        - Manejo independiente de rutas
        - Subnavegación

- Unmatched routes (default.tsx)
    - Uno de los grandes beneficios de parallel routes es la subnavegación.
    - Creamos una carpeta en notificaciones llamada archivos con su page.tsx y del page.tsx de notificaciones creamos un Link hacia esa ruta. Funciona, pero al momento de recargar la pagina en la ruta /dashboard/archivos
    tenemos un error 404.
    - Esto se debe a que en esa ruta no se encuentran los slots users, metricas y children, para solucionarlo debemos agregar un default.tsx a cada ruta unmatched.

- Conditional routes
    - Condicional de rutas basado en estado de autentificacion del usuario, mediante ternario validamos que ruta se navega, por ejemplo, dependiendo el estado de autentificacion si es true o false

- Intercepting routes
    - Intercepta o detiene el comportamiento por defecto de la ruta solicitada para presentar una vista alternativa cuando navegamos a traves de la UI
    - Uso de sintaxis de carpetas con (.)FolderName... Haremos una intercepcion a la ruta F2 usando el siguiente directorio:   
        -F1
            ->(.)F2
                ->page.tsx ------> Simple h1 con un texto ruta (.) interceptada F2
            ->F2
                page.tsx   ------> Simple h1 con un texto ruta F2
            ->page.tsx     ------> Simple h1 con un texto ruta F1 y un link que navega a F1/F2
    
    - Para interceptar una ruta de un nivel más arriba usamos (..)FolderName
        -F1
            ->F3
                ->page.tsx     ---> h1 con un texto ruta F3
            ->F4
                ->(..)F3   // usamos (..) porque interceptamos una ruta de un nivel mas arriba
                    ->page.tsx ---> h1 con un texto (..) ruta F3 interceptada
                ->page.tsx     ---> h1 con un texto ruta F4 y un link que navega a F1/F3

    - Para interceptar una ruta dos niveles mas arriba (..)(..)FolderName
    - Para interceptar una ruta del nivel del root app directory (...)FolderName

- Parallel intercepting routes (Example with an exercise)

- Route Handlers (route.ts)

- Handling GET request
- Handling POST request
- Dynamic route Handlers
- Handling PATCH request
- Handling DELETE request
- URL query params
- Redirects in route handlers
- Headers in route handlers