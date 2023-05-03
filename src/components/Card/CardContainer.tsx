import React, { ReactNode, SyntheticEvent } from 'react';
import styles from './Card.module.css'


const getChildrenByClassName = (node: HTMLDivElement, className: string): HTMLElement[] => {
    return Array.from(node.children).filter(child => child.classList.contains(className)) as HTMLElement[];
}
  
interface CardContainerProps {
    children: ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      getChildrenByClassName(e.currentTarget, styles.card).forEach((card) => {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      })
    }
  
    return (
      <div className={styles.card_container} onMouseMove={onMouseMove}>
        {children}
      </div>
    )
  }

  export default CardContainer;