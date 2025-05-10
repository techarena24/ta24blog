// app/(admin)/studio/layout.jsx
export const metadata = {
  title: 'Content Studio | Tech Arena24',
  description: 'Manage your tech content and publications',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground">
        <div className="fixed inset-0">
          {children}
        </div>
      </body>
    </html>
  );
}

