import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Products.module.css";
import { convertToPath } from "../lib/utils";

const Products = ({ item, showAs }) => {
  if (showAs === "Page") {
    return (
      <div className={styles.page}>
        <div >
          <Image
            src={item.image}
            alt={item.description}
            width={300}
            height={300}
          ></Image>
        </div>

        <div className={styles.info}>
          <div><h2>{item.title}</h2></div>
          <div className={styles.price}>${item.price}</div>
          <div>{item.description}</div>
          <div><button>ADD TO CART</button></div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return <div>List Item</div>;
  }

  return (
    <div className={styles.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <Image
            src={item.image}
            alt={item.description}
            width={250}
            height={250}
          ></Image>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>{item.title}</Link>
        </h3>
      </div>

      <div>${item.price}</div>
      <div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Products;
