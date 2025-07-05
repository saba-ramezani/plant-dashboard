import { Flex, Grid } from "antd"
import Banner from "../Banner/Banner"
import ProductsList from "../ProductsList/ProductsList"
import SellersList from "../SellersList/SellersList"

const { useBreakpoint } = Grid;


const MainContent = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.sm;
  const isBetweenMdAndLg = screens.md & !screens.lg;

  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Banner isMobile={isMobile} isBetweenMdAndLg={isBetweenMdAndLg} />
        <ProductsList />
        <SellersList isMobile={isMobile} />
      </Flex>
    </div>
  );
};

export default MainContent