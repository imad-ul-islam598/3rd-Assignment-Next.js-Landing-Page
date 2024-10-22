import './globals.css';
export const metadata = {
  title: 'Coursea.com',
  description: 'Learn the best courses online!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
