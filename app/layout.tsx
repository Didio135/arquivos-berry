import { FC, PropsWithChildren } from 'react'
import '../styles/globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='pt-BR'>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout