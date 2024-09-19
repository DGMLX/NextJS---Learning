
import type { Metadata } from "next";


export const metadata: Metadata = {
    title:{
        absolute:"",
        default:"Los mejores productos del mercado",
        template:"%s - TuCodigoWeb",    
    },
    description:"Encuentra los mejores productos con los mejores precios del mercado."
}


export default function RootLayout({children}:Readonly<{children: React.ReactNode;}>){ 



  return (
    <>
        {children}
    </>
  );
}
