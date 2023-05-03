import React, { ReactNode }  from 'react';

interface PageProps {
    children: ReactNode;
}

const Page: React.FC<PageProps>  = ({children}) => {
  return (
    <div className="page">
        <div className="page_content">
            {children}
        </div>
    </div>
  )
}

export default Page;