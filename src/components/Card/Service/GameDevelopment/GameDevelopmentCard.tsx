import Card from '../../Card'

import styles from './GameDevelopmentEffect.module.css'
import React from 'react'


const GameDevelopmentCard = (props: any) => {
    return (
        <Card key="game-development" className={styles.gameDevelopmentCard} label="Game Development" {...props} />
    )
}

export default GameDevelopmentCard;