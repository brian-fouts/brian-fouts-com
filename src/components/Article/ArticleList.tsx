import React, { ReactNode }  from 'react';
import styles from './Article.module.css'

interface ArticleListsProps {
    children: ReactNode;
}

export const ArticleLists: React.FC<ArticleListsProps>  = ({children}) => {
    return ( 
        <div className="flex gap-5 flex-wrap flex-grow justify-center">
            {children}
        </div>
    )
}

interface ArticleListProps {
    title: string;
    children: ReactNode;
}

export const ArticleList: React.FC<ArticleListProps>  = ({title, children}) => {
    return (
        <div className={styles.article}>
            <section className="w-full">
                <h2 className="underline text-center">{title}</h2>
                <div className="p-5">
                    {children}
                </div>
            </section>
        </div>
    )
}

interface ArticleLisItemProps {
    children: ReactNode;
}

export const ArticleListItem: React.FC<ArticleLisItemProps> = ({children}) => (
    <li>
        {children}
    </li>
)
