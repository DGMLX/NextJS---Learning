
const Docs = ({params}:{params:{slug:string[]}}) =>{
        if(params.slug?.length === 2){
            return <h1>Viewing the docs page for feature {params.slug[0]} and concept {params.slug[1]}</h1>
        }else if(params.slug?.length === 1){
            return <h1>Viewing the docs page for feature {params.slug[0]}</h1>
        }
    return(
        <h1 className="text-5xl text-center text-white">Docs Home Page</h1>
    )
}

export default Docs;