
import styles from './Loader.module.css'

interface LoaderProps {
    show: boolean;
}

export default function Loader(props: LoaderProps) {
  return props.show ? <div className={styles.loader}></div> : null
}