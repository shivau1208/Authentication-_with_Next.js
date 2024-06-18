import Loading from '../components/loader/loading';
import store from '../store/store';
import '../styles/globals.scss';
import Head from 'next/head';
import { Provider } from 'react-redux';

export const alert = (message, type) => {
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const wrapper = document.createElement('div')
  let html = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  alertPlaceholder.innerHTML = html;
}

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>All</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <div className='alert'>
          <div className='alert-box' id='liveAlertPlaceholder'></div>
        </div>
        <Loading />
      </Provider>
    </>
  );
}
