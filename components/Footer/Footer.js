import styles from './Footer.module.scss'
import Logo from '@components/Logo/Logo'
import IconHeart from 'svgs/IconHeart'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles['footer-txt']}>made with <IconHeart /></div>
    </footer>
  )
}
