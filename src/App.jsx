import { Button, Drawer, Layout, Grid, Flex } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import './App.css';
import { Sidebar, CustomHeader, MainContent, SideContent } from './components';

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();
  const isMobileOrMd = !screens.lg;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isMobileOrMd ? (
        <Drawer
          title={null}
          placement="left"
          closable={true}
          onClose={() => setCollapsed(false)}
          open={!collapsed ? false : true}
          width="100%"
          style={{padding: 0}}
        >
          <Sidebar />
        </Drawer>
      ) : (
        <Layout.Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={80}
          className="sider"
        >
          <Sidebar />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="collapse-menu-btn"
          />
        </Layout.Sider>
      )}

      <Layout>
        <Header className="header">
          <CustomHeader
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            isMobileOrMd={isMobileOrMd}
          />
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
