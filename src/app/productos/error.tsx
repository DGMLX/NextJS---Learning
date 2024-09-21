'use client'

const ErrorPage = ({error,reset}:{error:Error,reset:()=>void}) =>{
    return(
        <>
            <h1>...Error Page .....</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Intentar denuevo</button>
        </>
    )
}

export default ErrorPage;