import { Flex } from "antd"
import Banner from "../Banner/Banner"
import ProductsList from "../ProductsList/ProductsList"
import SellersList from "../SellersList/SellersList"

const MainContent = () => {
  return (
    <div style={{flex: 1}}>
        <Flex vertical gap={"2.3rem"}>
            <Banner />
            <ProductsList />
            <SellersList />
        </Flex>
    </div>
  )
}

export default MainContent