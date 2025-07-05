import { Avatar, Button, Flex, List, Typography } from "antd"
import { activityData } from "../../data/activityData"

const Activity = ({ isMobileOrMd }) => {
  return (
    <Flex vertical gap="small">
      <Flex align="center" justify="space-between" wrap>
        <Typography.Title
          level={isMobileOrMd ? 4 : 3}
          strong
          className="primary--color"
          style={{ marginBottom: 0 }}
        >
          Recent Activity
        </Typography.Title>
        <Button type="link" className="gray--color" style={{ paddingInline: 0 }}>
          View All
        </Button>
      </Flex>

      <List
        style={{ width: '100%' }}
        pagination={{
          pageSize: 5,
          responsive: true,
        }}
        dataSource={activityData}
        renderItem={(user, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={<Avatar src={user.profile} />}
              title={<a href="#">{user.name}</a>}
              description="Ordered a new plant"
            />
            <span className="gray--color">
              {user.orderTime} {user.orderTime === 1 ? 'day ago' : 'days ago'}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Activity