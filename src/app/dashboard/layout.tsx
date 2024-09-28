
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard page",
  description: "Practicando el concepto de parallel routes en dashboard page",
};

export default function DashboardLayout({children,users,metricas,notificaciones,login}:{children: React.ReactNode,users:React.ReactNode,metricas:React.ReactNode,notificaciones:React.ReactNode,login:React.ReactNode}){ 

  const isLogged = true;

  return (
    <>
      {
        isLogged ?
          <>
            <div>{children}</div>
            <p className="text-center px-10 my-10 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi consequuntur reiciendis modi repudiandae similique distinctio quam voluptas eius quia a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet a eius vero et distinctio praesentium modi. Amet odio impedit, dolorem corrupti excepturi neque distinctio voluptatem voluptas deserunt mollitia exercitationem.</p>
            <div>{users}</div>
            <div>{metricas}</div>
            <div>{notificaciones}</div>
          </> :
          <div>
            {login}
          </div>
      }

       
    </>
  );
}
