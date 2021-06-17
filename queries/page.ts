import { gql } from '@apollo/client'
import BlockTextImage from '../components/text_image/text_image.graphql'
import BlockSlider from '../components/slider/slider.graphql'
import BlockNewsTeaser from '../components/news_teaser/news_teaser.graphql'

export default gql`
  ${BlockTextImage}
  ${BlockSlider}
  ${BlockNewsTeaser}
  query page($uri: String) {
    entry(uri: $uri) {
      id
      title
      slug
      uri
      ... on Entry_Pages_Pages {
        replicator {
          __typename
          ...BlockTextImage
          ...BlockSlider
          ...BlockNewsTeaser
        }
      }
    }
  }
`
