import Card from '../../Card'

import styles from './DatabasesEffect.module.css'
import React from 'react'


const DatabasesCard = (props: any) => {
    return (
        <Card key="databases" className={styles.databasesCard} label="Databases" {...props} />
    )
}

export default DatabasesCard;