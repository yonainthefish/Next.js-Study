import NavBar from '@/components/NavBar'
// import { PageProps } from '../.next/types/app/layout'

export default function App({ Component, PageProps }) {
  return (
    <>
      <NavBar />
      <Component {...PageProps} />
    </>
  )
}
