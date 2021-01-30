import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
     <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
     </Helmet>
    )
}

Meta.defaultProps = {
    title:'Rakesh D R',
    description:'Rakesh Portfolio',
    keywords: 'Rakesh D R portfolio website',
}

export default Meta