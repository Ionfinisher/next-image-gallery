import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import { Stick } from "next/font/google";

export const revalidate = 3600

const stick = Stick({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Fancy NEXT Image Gallery',
  description: 'Image gallery powewred by Pexels API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={stick.className+ " bg-sky-900 text-white"}>
        <Navbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
