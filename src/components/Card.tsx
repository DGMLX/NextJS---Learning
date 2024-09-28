
const Card = ({children}:{children:React.ReactNode}) =>{
    const cardStyle={
        width:'70%',
        border:'1px solid black',
        padding:'5rem',
        backgroundColor:'#ff00'
    }

    return(
        <>
            <div className="flex justify-center items-center mb-5">
                <div style={cardStyle}>{children}</div>
            </div>
        </>
    )
}


export default Card