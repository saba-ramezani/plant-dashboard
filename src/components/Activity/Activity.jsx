import { Avatar, Button, Flex, List, Typography } from "antd"
import { activityData } from "../../data/activityData"

const Activity = () => {
  return (
    <Flex vertical gap={"small"}>
        <Flex align="center" justify="space-between" gap={"large"}>
            <Typography.Title level={3} strong className="primary--color">
                Recent Activity
            </Typography.Title>
            <Button type="link" className="gray--color">
                View All
            </Button>
        </Flex>

        <List 
            pagination={{
                pageSize: 5,
            }} 
            dataSource={activityData} renderItem={(user, index) =>
            (
                <List.Item key={index}>
                    <List.Item.Meta
                        avatar={<Avatar src={user.profile} />}
                        title={<a href="#">{user.name}</a>}
                        description="Ordered a new plant"
                    ></List.Item.Meta>
                    <span className="gray--color">
                        {user.orderTime} {user.orderTime == 1 ? "day ago" : "days ago"}
                    </span>
                </List.Item>
            )
        }>

        </List>
    </Flex>
  )
}

export default Activity