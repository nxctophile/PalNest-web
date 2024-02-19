import NavDrawer from '../ui/nav-drawer';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavDrawer />
      <body>{children}</body>
    </html>
  )
}