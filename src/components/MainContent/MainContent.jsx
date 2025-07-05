import { Flex } from "antd"
import Banner from "../Banner/Banner"
import ProductsList from "../ProductsList/ProductsList"

const MainContent = () => {
  return (
    <div style={{flex: 1}}>
        <Flex vertical gap={"2.3rem"}>
            <Banner />
            <ProductsList />
        </Flex>
    </div>
  )
}

export default MainContent