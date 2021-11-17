import { FormspreeProvider } from '@formspree/react'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1813524319930678705">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormspreeProvider>
  )
}

export default MyApp
