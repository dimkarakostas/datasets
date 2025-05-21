import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'datasets.gr',
  description: 'Συλλογές δεδομένων για την Ελλάδα',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "d0b6ff47a62e4bf2ae46108004b8641d"}'></script>
    </html>
  )
}
