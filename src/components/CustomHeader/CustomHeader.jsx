import { Avatar, Flex, Input, Typography, Grid } from 'antd';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;
const { Search } = Input;

const CustomHeader = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md; // screens.md = true when width >= 768px
  const isBetweenMdAndLg = screens.md && !screens.lg; //between 768 & 992

  return (
    <Flex
      vertical={isMobile ||isBetweenMdAndLg}
      align={'center'}
      justify="space-between"
      gap={isMobile || isBetweenMdAndLg ? '1rem' : 0}
      style={{ width: '100%', padding: '12px' }}
    >
      <Typography.Title
        level={isMobile ? 4 : 3}
        type="secondary"
        style={{ margin: 0 }}
      >
        Welcome back, Saba
      </Typography.Title>

      <Flex
        align="center"
        justify="space-between"
        gap={isMobile ? '1rem' : '3rem'}
        style={{ width: isMobile ? '100%' : 'fit-content' }}
      >
        <Search
          placeholder="Search Dashboard"
          allowClear
          className="header-search"
          style={{
            width: isMobile ? '100%' : 250,
            maxWidth: 250,
          }}
        />

        <Flex align="center" gap={isMobile ? '0.8rem' : '10px'}>
          <MessageOutlined className="header-icon" />
          <NotificationOutlined className="header-icon" />
          <Avatar
            icon={<UserOutlined />}
            size={isMobile ? 36 : 40}
            className="header-avatar"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
