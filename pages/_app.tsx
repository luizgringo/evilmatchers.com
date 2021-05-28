import type { AppProps } from 'next/app'
import '../public/fonts/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'

function EvilMatchersApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default EvilMatchersApp
