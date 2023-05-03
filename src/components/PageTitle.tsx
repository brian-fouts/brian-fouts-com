import React, { ReactNode }  from 'react';

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps>  = ({title}) => {
  return (
    <>
        <h1>{title}</h1>
        <hr />
    </>
  )
}

export default PageTitle;