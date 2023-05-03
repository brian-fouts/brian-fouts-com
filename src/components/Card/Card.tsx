import React, { ReactNode } from 'react';
import styles from './Card.module.css'

interface CardProps {
    children?: ReactNode;
    className?: string;
    label?: string;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onClick?: (event: React.MouseEvent) => void;
    imageSrc?: string;
    bgPosition?: string;
    bgSize?: string;
}


const Card: React.FC<CardProps> = ({ className, label, onMouseEnter, onClick, imageSrc, bgPosition, bgSize, children }) => {
    let classes = `${className  || ""}`;
    let style = {};
    if(imageSrc) {
      style = { ...style, 
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: bgPosition || "0px 0px",
        backgroundSize: bgSize || "100%"
      }
      classes = `${classes} bg-no-repeat bg-content-box`
    }

    return (
      <div key={label} className={styles.card} onMouseEnter={onMouseEnter} >
        <div className={styles.card_border}></div>
        <div className={`${styles.card_content} ${classes || ""}`} style={style}>
          <div className={`${styles.card_content_container}`} onClick={onClick}>
            {children}
            <div className={styles.card_label}>
              <span>{label}</span>
            </div>
          </div>
        </div>
        <div className={styles.card_overlay}></div>
      </div>
    );
}
export default Card;