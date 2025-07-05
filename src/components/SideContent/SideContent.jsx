import { Flex, Grid } from 'antd'
import ContentSidebar from '../ContentSidebar/ContentSidebar'
import { Activity } from '..'

const { useBreakpoint } = Grid;

const SideContent = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <Flex vertical gap="2.3rem" style={{ width: isMobile ? '100%' : 350 }}>
      <ContentSidebar isMobile={isMobile} />
      <Activity isMobile={isMobile} />
    </Flex>
  );
};


export default SideContent