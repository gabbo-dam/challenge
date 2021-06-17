import Page from '../layouts/page'
import {
  getStaticPathsWrapper,
  getStaticPropsWrapper,
} from '../utils/data_layer/pageQuery'
import PageQuery from '../queries/page'

export default Page

export const getStaticProps = getStaticPropsWrapper(PageQuery)
export const getStaticPaths = getStaticPathsWrapper()
