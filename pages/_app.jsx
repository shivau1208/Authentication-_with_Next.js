import store from '../store/store'
import '../styles/globals.scss'
import Head from 'next/head'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>All</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />

      </Provider>
    </>
  )
}
