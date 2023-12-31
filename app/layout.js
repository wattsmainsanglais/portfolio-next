import './globals.css'
import { Genos } from 'next/font/google'
import headerStyle from './header.module.css'
import profilePic from '../public/images/profilebw.jpg'
import Image from 'next/image'


 
const genos = Genos({
  weight: '300',
  subsets: ['latin']

})




export const metadata = {
  title: 'awattsdev',
  description: 'Homepage of Andrew Watts full stack development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={genos.className}>
      <body>
        <header className={headerStyle.headercss}>
            <aside className="profile">
                <Image
               
                src={profilePic}
                alt='Picture of Andrew Watts (awattsdev)'
                />
                
                <div className="mask">
                    
                </div>
               
            </aside>
            <h1>Andrew Watts Development</h1>
          </header> 
         
      {children}
      </body>
    </html>
  )
}
