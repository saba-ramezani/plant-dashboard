import { Card, Flex, Image, Typography } from "antd";
import { plant1 } from "../../assets";

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card" style={{ position: 'relative', overflow: 'hidden', height: '350px' }}>
        <Flex style={{ height: '100%' }} justify="space-between" align="center">
          <Flex vertical gap={60} justify="center" align="center" style={{ width: '50%' }}>
            <div>
              <Typography.Title level={5}>
                Today
              </Typography.Title>
              <Typography.Title level={3} strong>
                5 Orders
              </Typography.Title>
            </div>

            <div className="">
              <Typography.Title level={5}>
                This Month
              </Typography.Title>
              <Typography.Title level={3} strong>
                240 Orders
              </Typography.Title>
            </div>
          </Flex>

          <Flex justify="center" align="center" style={{ width: '50%' }}>
            <Image
              src={plant1}
              alt="plant"
              style={{
                height: '300px',
                width: 'auto',
              }}
              preview={false}
            />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default ContentSidebar;
