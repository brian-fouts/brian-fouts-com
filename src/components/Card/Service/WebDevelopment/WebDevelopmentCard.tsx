import Card from '../../Card'

import styles from './WebDevelopmentEffect.module.css'
import React from 'react'


const WebDevelopmentCard = (props: any) => {
    return (
        <Card key="web_development" className={styles.webDevelopmentCard} label="Web Development" {...props} />
    )
}

export default WebDevelopmentCard;