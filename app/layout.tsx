import Provider from './Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        {
          /* @ts-expect-error Server Component */
          <Provider>{children}</Provider>
        }
      </body>
    </html>
  );
}
