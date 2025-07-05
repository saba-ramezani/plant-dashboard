import { Avatar, Flex, Input, Typography, Grid } from 'antd';
import { MessageOutlined, NotificationOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;
const { Search } = Input;

const CustomHeader = ({ collapsed, setCollapsed, isMobileOrMd }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const isBetweenMdAndLg = screens.md && !screens.lg;

  return (
    <Flex
      vertical={isMobile || isBetweenMdAndLg}
      align="center"
      justify="space-between"
      gap={isMobile || isBetweenMdAndLg ? '1rem' : 0}
      style={{ width: '100%', padding: '12px' }}
    >
      <Flex align="center" gap="1rem" style={{ width: '100%' }}>
        {isMobileOrMd && (
          <MenuOutlined
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: 20, color: 'white', cursor: 'pointer', backgroundColor: '#4f6f52', padding: 10, borderRadius: '100%' }}
          />
        )}
        <Typography.Title
          level={isMobile ? 4 : 3}
          type="secondary"
          style={{ margin: 0 }}
        >
          Welcome back, Saba
        </Typography.Title>
      </Flex>

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
