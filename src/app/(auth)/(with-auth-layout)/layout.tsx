export default function AuthLayout({children}:{children: React.ReactNode;}){ 

    return (
      <>
      
          {children}
          <h2>Layout anidado para un grupo de rutas especificas </h2>
        <p>Para login y registro</p>
      </>
     
    );
  }