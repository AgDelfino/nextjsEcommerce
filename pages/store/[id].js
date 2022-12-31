import Layout from "../../components/Layout";
import Products from "../../components/Products";
import { getItemData, getPathsFromIds } from "../../lib/utils";

const ProductPage = ({productInfo}) => {
  return (
    <Layout>
      <Products item={productInfo} showAs="Page"/>
    </Layout>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
    const paths = await getPathsFromIds()
    
    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}) => {
    const id = params.id
    const product = await getItemData(id)

    return {
        props: {
            productInfo: product.data
        }
    }
}
