import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../public/fonts/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'

function EvilMatchersApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Evil Matchers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Página oficial da banda mineira de Rock n' Roll Evil Matchers." />
        <meta name="Keywords" content="punk, garage rock, glam rock, proto punk, punk rock, punk 77, Belo Horizonte, Brazil" />
        <meta name="Publisher" content="Evil Matchers" />
        <meta name="distribution" content="Global" />
        <meta name="Robots" content="INDEX,FOLLOW" />
        <meta name="city" content="Belo Horizonte" />
        <meta name="country" content="Brazil" />
        <meta property="og:title" content="EVIL MATCHERS - Escute agora o Nowhere Ride EP." />
        <meta property="og:site_name" content="Evil Matchers" />
        <meta property="og:url" content="http://www.evilmatchers.com" />
        <meta property="og:description" content="Baixe agora o nosso novo EP: Nowhere Ride e contribua com uma doação para a Santa Casa de BH, na lutra contra o Covid-19!" />
        <meta property="fb:app_id" content="1769052159973630" />
        <meta property="og:type" content="music.musician" />
        <meta property="og:image" content="http://www.evilmatchers.com/images/nowhereride.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default EvilMatchersApp
