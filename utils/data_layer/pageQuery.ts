import { Context, DocumentNode, gql } from '@apollo/client'
import client from './apollo-client'

const slugArrayToUri = (slugs: string[]): string => `/${slugs.join('/')}`

export const getStaticPropsWrapper =
  (query: DocumentNode) => async (ctx: Context) => {
    const uri = slugArrayToUri(ctx.params?.slug || [])
    const { data } = await client.query({
      query,
      variables: {
        uri,
      },
    })

    return {
      props: {
        entry: data.entry,
      },
    }
  }

export const getStaticPathsWrapper = () => async () => {
  const { data } = await client.query({
    query: gql`
      query pages {
        entries(collection: "pages") {
          data {
            id
            title
            slug
            uri
          }
        }
      }
    `,
  })

  const paths = data.entries.data.map((e) => {
    return {
      params: { slug: e.uri.substring(1).split('/') },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
