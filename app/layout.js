import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider, ApiProviders } from './provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task management app',
  description: 'Simple Task mangement app by Md Moshiur Rahman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApiProviders>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ApiProviders>
      </body>
    </html>
  )
}
