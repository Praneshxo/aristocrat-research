import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aristocrat Research & Innovation | Research to Results',
  description: 'Research, innovation and commercialisation infrastructure for institutions, faculty, scholars and student innovators.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
