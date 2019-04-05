import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import { Parser } from 'html-to-react'
import React from 'react'
import Layout from '../components/Layout'

const container = css`
  margin: 0 auto;
  padding-top: 4rem;
  max-width: 600px;
  color: #333333;

  h1 {
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 0.25rem;
  }

  .grey {
    color: #96999b;
  }
`

const htmlToReactParser = new Parser()

export default props => {
  const { data } = props
  const content = data.prismicHomepage.data
  const name = content.name.text
  const description = content.description.html

  return (
    <Layout>
      <div css={container}>
        <h1>{name}</h1>
        {htmlToReactParser.parse(description)}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    prismicHomepage {
      data {
        name {
          text
        }
        description {
          html
        }
      }
    }
  }
`
