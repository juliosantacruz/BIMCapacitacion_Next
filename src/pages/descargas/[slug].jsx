import React from 'react'
import styled from 'styled-components'
import Contact from '../../sections/Contact'

function Slug({className}) {
  return (
    <>
    <section className={className}>
      <h1>TITULO </h1>

    </section>

    <Contact/>
    </>
  )
}
export default styled(Slug)`
  min-height: calc(100vh - 220px);

`