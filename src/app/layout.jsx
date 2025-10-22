import '../styles/globals.css'

export const metadata = {
  title: 'Art & Craft Gallery - Handcrafted Masterpieces',
  description: 'Explore our curated collection of handcrafted art and unique craft pieces. From traditional to contemporary designs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
