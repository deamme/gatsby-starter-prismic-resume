import { graphql } from 'gatsby'
import React from 'react'

export default props => {
  const { data } = props

  return <h1>{data.prismicHomepage.data.name.text}</h1>
}

export const pageQuery = graphql`
  query {
    prismicHomepage {
      data {
        name {
          text
        }
      }
    }
  }
`
