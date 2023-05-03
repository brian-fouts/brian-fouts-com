import Card from '../../Card'

import styles from './CloudEffect.module.css'
import React from 'react'


const CloudCard = (props: any) => {
    return (
        <Card key="cloud" className={styles.cloudCard} label="Cloud" {...props} />
    )
}

export default CloudCard;