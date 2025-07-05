import { Card, Flex, Image, Typography } from "antd"
import { plant1 } from "../../assets"

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap={"large"}>
          <Typography.Title level={4} strong>
            Today <br /> 5 Orders
          </Typography.Title>
          <Typography.Title level={4} strong>
            This Month <br /> 240 Orders
          </Typography.Title>
        </Flex>
        <Image src={plant1} alt="plant" style={{position: 'absolute', bottom: -50, left: '50px', height: "300px", width: 'auto'}} />
      </Card>
    </div>
  )
}

export default ContentSidebar