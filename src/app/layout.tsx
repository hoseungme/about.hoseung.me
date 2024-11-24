import "./layout.style.scss";

import Link from "next/link";

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
        <header className="w-full sticky top-0 left-0 right-0 z-[9999] px-5 py-4 flex justify-center backdrop-blur-md">
          <div className="max-w-[700px] w-full flex items-center">
            <Link className="mr-auto" href="/">
              <h1 className="text-xl font-bold">hoseung.me</h1>
            </Link>
            <a className="mr-3 text-base" href="https://blog.hoseung.me">
              blog
            </a>
            <a className="text-base" href="https://github.com/hoseungme">
              github
            </a>
          </div>
        </header>
        <main className="w-full flex justify-center px-5 mt-1">
          <div className="max-w-[700px] w-full flex flex-col">{children}</div>
        </main>
        <footer className="w-full flex justify-center px-4 py-16">
          <a className="font-bold" href="https://github.com/hoseungme">
            ©hoseungme
          </a>
        </footer>
      </body>
    </html>
  );
}
