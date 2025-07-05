import { Button, Card, Flex, Image, Typography } from 'antd'
import { plantData } from '../../data/plantData'

const {Meta} = Card;
const ProductsList = () => {
  return (
    <>
      <Flex align='center' justify='space-between'>
        <Typography.Title level={3} strong className='primary--color'>
          My Listings
        </Typography.Title>
        <Button type='link' className='secondary--color'>View All</Button>
      </Flex>
      <Flex align='center' gap={'large'}>
        {plantData.map((plant) => (
          <Card key={plant.id} hoverable className='plant-card'>
            <Image src={plant.picture} style={{width: '130px'}} />
            <Meta title={plant.name} style={{marginTop: '1rem'}} />
          </Card>
        ))}
      </Flex>
    </>
  )
}

export default ProductsList