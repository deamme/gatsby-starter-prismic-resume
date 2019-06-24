import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import { Parser } from 'html-to-react'
import React from 'react'
import Layout from '../components/Layout'

const container = css`
  margin: 0 auto;
  padding: 4rem 2rem 8rem 2rem;
  max-width: 600px;
  color: #333333;

  h1 {
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 4rem;
    font-size: 12px;
    font-weight: 600;
    color: #c9cccf;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }

  p {
    margin-bottom: 0.25rem;
  }

  a {
    transition: box-shadow 160ms ease 0s;
    box-shadow: rgb(238, 251, 255) 0px -9px 0px inset;
    border-bottom: 2px solid rgb(207, 243, 255);
    text-decoration: none;
    color: #323336;
    &:hover {
      box-shadow: rgb(207, 243, 255) 0px -1.2em 0px inset;
    }
  }

  .section ul {
    margin-top: 0.5rem;
    margin-left: 2.5rem;
    list-style: disc;
  }

  .section li {
    margin-bottom: 0.5rem;
  }

  .grey {
    color: #96999b;
  }

  .headline {
    display: block;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1.2px;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
  }

  .skills ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .skills li {
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    padding: 0.25rem 1rem;
    background-color: #f1f5f7;
    white-space: nowrap;
  }
`

const htmlToReactParser = new Parser()

export default props => {
  const { data } = props
  const content = data.prismicHomepage.data
  const name = content.name.text
  const description = content.description.html

  const sections = content.body.map(section => {
    const title = section.primary.title.text
    const items = section.items.map(item => htmlToReactParser.parse(item.content.html))

    if (section.slice_type === 'section') {
      return (
        <div className="section">
          <h2>{title}</h2>
          <div>{items}</div>
        </div>
      )
    }
    if (section.slice_type === 'skills') {
      return (
        <div className="skills">
          <h2>{title}</h2>
          <div>{items}</div>
        </div>
      )
    }
  })

  return (
    <Layout>
      <div css={container}>
        <h1>{name}</h1>
        {htmlToReactParser.parse(description)}
        {sections}
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
        body {
          ... on PrismicHomepageBodySection {
            slice_type
            primary {
              title {
                text
              }
            }
            items {
              content {
                html
              }
            }
          }
          ... on PrismicHomepageBodySkills {
            slice_type
            primary {
              title {
                text
              }
            }
            items {
              content {
                html
              }
            }
          }
        }
      }
    }
  }
`
