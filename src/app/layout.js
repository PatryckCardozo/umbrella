import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Umbrella Comerce',
  description: 'Umbrella Comerce',
  icons:{
    icon:['/favicon.ico'],
    apple:['apple-touch-icon.png'],
    shortcut:['apple-touch-icon.png']
  }
}


export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
