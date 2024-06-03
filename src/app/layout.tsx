import type { Metadata } from "next";
import "@/src/global/styles/global.scss";
import { Header } from "../components/Header/Header";
import { Manrope, Prata } from 'next/font/google'

const manrope = Manrope({
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-manrope'
})

const prata = Prata({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: '400',
  variable: '--font-prata'
})

export const metadata: Metadata = {
  title: "Методика по самопомощи",
  description: "Трансформация раз и навсегда по очень простому, быстрому и эффективному методу."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${prata.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}