import { Button, Flex, Layout, Grid } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import './App.css';
import { Sidebar, CustomHeader, MainContent, SideContent } from './components';

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();
  const isMobileOrMd = !screens.lg; 

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={isMobileOrMd ? 0 : 80}
        breakpoint="md"
        onBreakpoint={(broken) => setCollapsed(broken)}
        className="sider"
      >
        <Sidebar />
        {!isMobileOrMd && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="collapse-menu-btn"
          />
        )}
      </Sider>

      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex
            vertical={isMobileOrMd}
            gap="large"
            justify="space-between"
            style={{ padding: isMobileOrMd ? 12 : 24 }}
          >
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
