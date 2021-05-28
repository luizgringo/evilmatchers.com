import styles from './Home.module.scss'
import stylesTemp from './HomeTemp.module.scss'

import Image from 'next/image'

export const HomeTemp = (): JSX.Element => {
  return (
    <div className={styles.container}>
        <h1 className={stylesTemp.title}>BAIXE AGORA O NOVO EP:</h1>
        <h2 className={stylesTemp.subTitle}>NOWHERE RIDE</h2>
        <Image
          src="/images/nowhereride.jpeg"
          alt="Nowhere Ride E.P."
          objectFit="contain"
          width={500}
          height={500}
        />
        <a href="http://bit.ly/nowhereride" target="_blank" className={stylesTemp.downloadButton}>
          DOWNLOAD NOW!
        </a>
    </div>
  )
}

export default HomeTemp;
