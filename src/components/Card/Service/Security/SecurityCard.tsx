import Card from '../../Card'
import styles from './SecurityEffect.module.css'

const SecurityCard = (props: any) => {
    return (
        <Card key="security" className={styles.securityCard} label="Security" {...props} />
    )
}

export default SecurityCard;
