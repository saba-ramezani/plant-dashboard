import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography, Row, Col, Grid } from "antd"

const SellersList = ({ isMobile }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={24} lg={24} xl={12}>
        <Flex vertical gap="small" className="top-seller">
          <Flex align="center" justify="space-between">
            <Typography.Title level={5} strong className="primary--color">
              Top Sellers
            </Typography.Title>
            <Button type="link" className="gray--color">View All</Button>
          </Flex>

          <Card>
            <Flex wrap="wrap" align="center" justify="space-evenly" gap="middle">
              <Avatar.Group
                max={{
                  count: 5,
                  popover: { trigger: 'click' },
                  style: { color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' },
                }}
                size="large"
              >
                <Tooltip title="User 1" placement="top">
                    <Avatar src="https://images.pexels.com/photos/1188971/pexels-photo-1188971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </Tooltip>
                <Tooltip title="User 2" placement="top">
                    <Avatar src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250" />
                </Tooltip>
                <Tooltip title="User 3" placement="top">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAUPUG0r--EDZzf-f9Afj_Jp7N96yIGsWPgCYIkrAS1rCJHIcdm_RCq_me44bJc0dvvY&usqp=CAU" />
                </Tooltip>
                <Tooltip title="User 4" placement="top">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYKyMlU3aL9c65GRg648j3lFgBWcN5FgvKOw7kENfNZHHbSREvi6U73ZIZKjKoTmtsJM&usqp=CAU" />
                </Tooltip>
                <Tooltip title="User 5" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/relaxed-foxy-girl-with-freckled-soft-skin-enjoys-peaceful-atmosphere-keeps-hands-mudra-sign-relaxed-after-intense-day_273609-19119.jpg?semt=ais_hybrid&w=740" />
                </Tooltip>
                <Tooltip title="User 6" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/young-cheerful-happy-girl-smiling-laughing_176420-9604.jpg?semt=ais_hybrid&w=740" />
                </Tooltip>
                <Tooltip title="User 7" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/headshot-cute-woman-with-luminous-blue-eyes-glowing-face-gentle-smile-rejoicing-from-her-success_273609-7638.jpg?semt=ais_items_boosted&w=740" />
                </Tooltip>
                <Tooltip title="User 8" placement="top">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Tooltip>
              </Avatar.Group>
              <Flex vertical align="flex-start">
                <Typography.Text type="secondary" strong>
                  1,200 plants sold
                </Typography.Text>
                <Typography.Text type="secondary" strong>
                  10 Sellers
                </Typography.Text>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Col>

      <Col xs={24} md={24} lg={24} xl={12}>
        <Flex vertical gap="small" className="featured-seller">
          <Flex align="center" justify="space-between">
            <Typography.Title level={5} strong className="primary--color">
              Featured Sellers
            </Typography.Title>
            <Button type="link" className="gray--color">View All</Button>
          </Flex>

          <Card>
            <Flex wrap="wrap" align="center" justify="space-evenly" gap="middle">
              <Avatar.Group
                max={{
                  count: 5,
                  popover: { trigger: 'click' },
                  style: { color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' },
                }}
                size="large"
              >
                <Tooltip title="User 1" placement="top">
                    <Avatar src="https://images.pexels.com/photos/1188971/pexels-photo-1188971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </Tooltip>
                <Tooltip title="User 2" placement="top">
                    <Avatar src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250" />
                </Tooltip>
                <Tooltip title="User 3" placement="top">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAUPUG0r--EDZzf-f9Afj_Jp7N96yIGsWPgCYIkrAS1rCJHIcdm_RCq_me44bJc0dvvY&usqp=CAU" />
                </Tooltip>
                <Tooltip title="User 4" placement="top">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYYKyMlU3aL9c65GRg648j3lFgBWcN5FgvKOw7kENfNZHHbSREvi6U73ZIZKjKoTmtsJM&usqp=CAU" />
                </Tooltip>
                <Tooltip title="User 5" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/relaxed-foxy-girl-with-freckled-soft-skin-enjoys-peaceful-atmosphere-keeps-hands-mudra-sign-relaxed-after-intense-day_273609-19119.jpg?semt=ais_hybrid&w=740" />
                </Tooltip>
                <Tooltip title="User 6" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/young-cheerful-happy-girl-smiling-laughing_176420-9604.jpg?semt=ais_hybrid&w=740" />
                </Tooltip>
                <Tooltip title="User 7" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/headshot-cute-woman-with-luminous-blue-eyes-glowing-face-gentle-smile-rejoicing-from-her-success_273609-7638.jpg?semt=ais_items_boosted&w=740" />
                </Tooltip>
                <Tooltip title="User 8" placement="top">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Tooltip>
              </Avatar.Group>
              <Flex vertical align="flex-start">
                <Typography.Text type="secondary" strong>
                  1,530 plants sold
                </Typography.Text>
                <Typography.Text type="secondary" strong>
                  13 Sellers
                </Typography.Text>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Col>
    </Row>
  );
};

export default SellersList