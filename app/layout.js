import './globals.css'


export const metadata = {
    title: '域次元',
    description: '域次元-官网',
}

export default function RootLayout({children}) {
    return (
        <html lang="zh-CN">
        <body>
        {children}
        </body>
        </html>
    )
}
