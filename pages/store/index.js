import Layout from "../../components/Layout";
import { getItems } from "../../services/getItems";
import Image from "next/image";
import Products from "../../components/Products";
import styleItems from "../../styles/Products.module.css";

const Index = ({ items }) => {
  return (
    <Layout>
      <h1>Store</h1>
      <div className={styleItems.items}>
        {items.map((item) => {
          return <Products key={item.id} item={item} showAs="Default" />;
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  //tenemos getServerStaticProps que lo que hace es renderizar la información cada vez que el usuario hace una petición, en este caso no es necesario ya que la información no se va a estar modificando constantemente.
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}

export default Index;
