import PageTitle from "@/components/PageTitle";

import React, {ReactNode} from 'react';

interface ArticleBodyProps {
    children?: ReactNode;
}

const ArticleBody: React.FC<ArticleBodyProps>  = ({children}) => (
    <div className="py-5 flex justify-center gap-5 flex-wrap flex-grow w-full">
        {children}
    </div>
)

export default ArticleBody;