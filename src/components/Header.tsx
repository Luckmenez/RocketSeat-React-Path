import styles from './header.module.css'
import { Logo } from './Logo' 

export function Header(){
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo/>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </div>
    </div>
  )
}