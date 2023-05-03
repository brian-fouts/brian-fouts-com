import Card from '../../Card'

import styles from './AutomatedTestingEffect.module.css'
import React from 'react'


const AutomatedTestingCard = (props: any) => {
    return (
        <Card key="testing" className={styles.testingCard} label="Automated Testing" {...props} />
    )
}

export default AutomatedTestingCard;