import PageTitle from "@/components/PageTitle";

import React, {ReactNode} from 'react';

interface ArticleProps {
    title: string;
    children?: ReactNode;
}

const Article: React.FC<ArticleProps>  = ({title, children}) => (
    <div className="w-full">
        <PageTitle title={title} />
        <div className="main_content">
            <article className="w-full">
                {children}
            </article>
        </div>
    </div>
)


export default Article;