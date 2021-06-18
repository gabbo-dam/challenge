// description
// type
// news_src {
//   title
//   structure {
//     tree {
//       page {
//         id
//         ... on EntryPage_News_News {
//           id
//           url
//           title
//           teaser
//           hero {
//             id
//             url
//             ratio
//             focus_css
//           }
//         }
//       }
//     }
//   }
// }
export default interface NewsTeaserInterface {
  description: string
  type: string
  news_src: {
    title: string
    structure: {
      tree: blockInterface[]
      }
    }
  }
}


export interface blockInterface {
  page: pageBlock
}

export interface pageBlock {
  id: string
  url: string
  title: string
  teaser: string
  hero: {
    id
    url
    focus_css
    ratio
  }
}