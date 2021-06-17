import { gql } from '@apollo/client'

export default gql`
  fragment BlockSlider on Set_Replicator_BlockSlider {
    description
    type
    headline
    slider {
      image {
        id
        url
        focus_css
        ratio
      }
      overlay_text
    }
  }
`
