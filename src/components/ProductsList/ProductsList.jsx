import { Button, Card, Flex, Image, Typography, Row, Col } from 'antd'
import { plantData } from '../../data/plantData'

const {Meta} = Card;
const ProductsList = () => {
  return (
    <>
      <Row align="middle" justify="space-between">
        <Typography.Title level={3} strong className="primary--color">
          My Listings
        </Typography.Title>
        <Button type="link" className="secondary--color">View All</Button>
      </Row>

      <Row gutter={[16, 16]}>
        {plantData.map((plant) => (
          <Col xs={24} sm={12} md={8} lg={10} xl={6} key={plant.id}>
            <Card hoverable style={{flex: 1, height: '250px', textAlign: 'center'}}>
              <Image src={plant.picture} style={{ width: '100%', height: 130, objectFit: 'cover' }} />
              <Meta title={plant.name} style={{ marginTop: 16 }} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductsList