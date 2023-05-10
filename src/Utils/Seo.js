import React from 'react'
import { Helmet } from 'react-helmet';


export default function Seo({title = 'Dashboard', description = 'Title.'}) {
  return (
    <Helmet>
        <title>Cryptocrowd— {title}</title>
        <meta name="title" content={`Title — ${title}`} />
        <meta name="description" content={description} />

      
  </Helmet>
  )
}
