import { Provider } from 'react-redux';
import { useStore } from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
