import Layout from '../layouts/Main';
import ChapterCard from '../components/chapter-card';
import ProductList from '../components/product-list';

export default function Home() {
  return (
    <Layout>
      <ChapterCard/>

      <ProductList/>
    </Layout>
  )
}