import Head from "next/head";
import React from "react";

function HeadWrapper() {
  return (
    <Head>
      <title></title>
      <meta charSet="UTF-8" />
      <meta name="description" content="HawaiiDev Shop" />
      <meta
        name="keywords"
        content="HawaiiDev, Hemorganisation, Organiseringsprodukter, Vardagsprodukter"
      />
      <meta name="author" content="HawaiiDev" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="HawaiiDev Shop" />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content="data:image/jpeg;base64,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"
      />
      <meta property="og:url" content="https://shop.hawaiidev.net" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

export default HeadWrapper;
