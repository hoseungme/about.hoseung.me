import "./layout.style.scss";

const GAScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-8T7TZBK7LG');
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8T7TZBK7LG"></script>
        <script>{GAScript}</script>
      </head>
      <body className="antialiased">
        <main className="w-full flex justify-center px-5 pt-5 pb-12">
          <div className="max-w-[700px] w-full flex flex-col">{children}</div>
        </main>
      </body>
    </html>
  );
}
