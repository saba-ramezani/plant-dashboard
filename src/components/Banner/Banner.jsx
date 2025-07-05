import { Button, Card, Flex, Typography } from 'antd'

const Banner = ({ isMobile, isBetweenMdAndLg }) => {
  return (
    <Card style={{ height: isMobile ? 'auto' : '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={isMobile ? 3 : isBetweenMdAndLg ? 2 : 1} strong>
            Create and Sell Products
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo quisquam, aliquid ad error quaerat,
          </Typography.Text>
        </Flex>

        <Flex vertical={isMobile} gap="middle">
          <Button type="primary" size="large">Explore More</Button>
          <Button size="large">Top Sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner