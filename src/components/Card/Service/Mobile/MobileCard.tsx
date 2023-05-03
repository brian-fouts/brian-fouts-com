import Card from '../../Card'

import styles from './MobileEffect.module.css'
import React from 'react'


const MobileCard = (props: any) => {
    return (
        <Card key="mobile" className={styles.mobileCard} label="Mobile" {...props} />
    )
}

export default MobileCard;