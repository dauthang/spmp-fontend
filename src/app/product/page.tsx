import BackgroundClassic from "@/components/background-classic/background-classic";
import ImageBackground from "@/components/image-background/image-background";
import ListCardClassic from "@/components/list-card-classic/card-classic";
import ListCard from "@/components/list-card/list-card";
import Order from "@/components/order/order";
import Layout from "../layout";

const Product = () => {
  return (
    <div>
      <Order />
      <ListCardClassic />
      <ImageBackground />
    </div>
  );
};

export default Product;
