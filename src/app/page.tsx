import Link from "next/link";

const HomePage = () =>{
  return(
    <>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/productos">Productos</Link>
      <h1>Home Page</h1>
    </>
  )
}

export default HomePage;