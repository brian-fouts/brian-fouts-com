import React, { ReactNode }  from 'react';
import styles from './Article.module.css'

interface ArticleSectionProps {
    title?: string;
    children: ReactNode;
}

const ArticleSection: React.FC<ArticleSectionProps>  = ({title, children}) => {
    return (
        <div className={styles.article_section}>
            <section className="w-full">
                <h2 className="underline text-center">{title}</h2>
                <div className="p-5 w-full">
                    {children}
                </div>
            </section>
        </div>
    )
}

export default ArticleSection;