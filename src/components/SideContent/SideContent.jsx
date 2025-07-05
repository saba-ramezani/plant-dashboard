import { Flex, Grid } from 'antd'
import ContentSidebar from '../ContentSidebar/ContentSidebar'
import { Activity } from '..'

const { useBreakpoint } = Grid;

const SideContent = () => {
  const screens = useBreakpoint();
  const isMobileOrMd = !screens.lg;

  return (
    <Flex vertical gap="2.3rem" style={{ width: isMobileOrMd ? '100%' : 350 }}>
      <ContentSidebar />
      <Activity isMobileOrMd={isMobileOrMd} />
    </Flex>
  );
};


export default SideContent