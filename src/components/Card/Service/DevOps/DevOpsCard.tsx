import Card from '../../Card'

import styles from './DevOpsEffect.module.css'
import React from 'react'


const DevOpsCard = (props: any) => {
    return (
        <Card key="devops" className={styles.devOpsCard} label="DevOps" {...props} />
    )
}

export default DevOpsCard;
