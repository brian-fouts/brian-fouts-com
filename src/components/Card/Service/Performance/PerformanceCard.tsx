import Card from '../../Card'

import styles from './PerformanceEffect.module.css'
import React from 'react'


const PerformanceCard = (props: any) => {
    return (
        <Card key="performance" className={styles.performanceCard} label="Performance" {...props} />
    )
}

export default PerformanceCard;