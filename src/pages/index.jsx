import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const container = css`
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 600px;
`

const name = css`
  font-size: 30px;
  font-weight: 600;
  color: #333333;
  text-transform: uppercase;
`

export default props => {
  const { data } = props

  return (
    <Layout>
      <div css={container}>
        <h1 css={name}>{data.prismicHomepage.data.name.text}</h1>
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
      }
    }
  }
`
