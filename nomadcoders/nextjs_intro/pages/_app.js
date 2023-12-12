import NavBar from '@/components/NavBar'

import Layout from './Layout'

export default function App({ Component, PageProps }) {
  return (
    <Layout>
      <Component {...PageProps} />
    </Layout>
  )
}
