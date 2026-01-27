// src/app/head.tsx
export default function Head() {
  return (
    <>
      <title>Ahmeet — Real-Time Video Conferencing Platform</title>
      <meta
        name="description"
        content="Ahmeet is a modern, real-time video conferencing and collaboration platform."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://www.ahmeet.com/" />
      {/* Open Graph */}
      <meta
        property="og:title"
        content="Ahmeet — Real-Time Video Conferencing Platform"
      />
      <meta
        property="og:description"
        content="Ahmeet is a modern, real-time video conferencing and collaboration platform."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ahmeet.com/" />
      <meta property="og:image" content="/og-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Ahmeet — Real-Time Video Conferencing Platform"
      />
      <meta
        name="twitter:description"
        content="Ahmeet is a modern, real-time video conferencing and collaboration platform."
      />
      <meta name="twitter:image" content="/og-image.png" />
    </>
  );
}
