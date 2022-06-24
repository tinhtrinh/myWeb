import Layout from '../layouts/Main';
import MostViewChapterList from '../components/most-view-chapter-list';
import ProductList from '../components/product-list';

import Divider from '@material-ui/core/Divider';

export default function Home() {
  return (
    <Layout>
      <MostViewChapterList/>
      <br/>
      <ProductList/>
    </Layout>
  )
}