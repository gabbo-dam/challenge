import { gql } from '@apollo/client'

export default gql`
fragment BlockNewsTeaser on Set_Replicator_BlockNewsTeaser {
  description
  type
  news_src {
    title
    structure {
      tree {
        page {
          id
          ... on EntryPage_News_News {
            id
            url
            title
            teaser
            hero {
              id
              url
              ratio
              focus_css
            }
          }
        }
      }
    }
  }
}
`
