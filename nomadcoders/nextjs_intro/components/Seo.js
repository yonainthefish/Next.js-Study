import Head from 'next/head'

export default function ({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  )
}
