import { gql } from '@apollo/client'

export default gql`
  fragment BlockTextImage on Set_Replicator_BlockTextImage {
    subline
    description
    type
    image {
      id
      ratio
      url
      focus_css
    }
    headline
    buttons {
      label
      link
      btn_type {
        value
      }
    }
  }
`
