import Footer from "./(components)/(Footer)/page";
import Navbar from "./(components)/(Navbar)/page";

export const metadata = {
  title: 'CODEVERSE',
  description: 'multiverse of coders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'black', color:'white'}}>
        <div style={{textAlign:"center"}}>
          <Navbar/>  
          <div>{children}</div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
