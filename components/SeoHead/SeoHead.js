import Head from 'next/head'

const SeoHead = ({
  image = 'https://nftstorage.link/ipfs/bafybeie7mjxupsl5adhaj7novgndjifvggw6ebe7jeug6t7xda5palw7oi/cover.png',
}) => {
  const title = process.env.NEXT_PUBLIC_TITLE
  const description = process.env.NEXT_PUBLIC_DESCRIPTION_TEXT
  const url = 'https://march8.xyz/'

  return (
    <Head>
      {/* MAIN SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={image} />
      <link rel="icon" href={image} />
      <link rel="apple-touch-icon" href={image} />
      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      {/* OG */}
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta property="og:image" content={image} />
    </Head>
  )
}

export default SeoHead
