import React from 'react'
import styled from 'styled-components'
import Link from "next/link";


function CardDownloads({className, article}) {
  return (
    <Link href={{
        pathname: `/descargas/${article.slug}`,
      }}>
    <article className={className}>
      <h2>{article.title}</h2>
    </article>
    </Link>
  )
}
export default styled(CardDownloads)`
    
`