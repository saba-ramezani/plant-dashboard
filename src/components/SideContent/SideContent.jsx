import { Flex } from 'antd'
import React from 'react'
import ContentSidebar from '../ContentSidebar/ContentSidebar'
import { Activity } from '..'

const SideContent = () => {
  return (
    <Flex vertical gap={'2.3rem'} style={{width:350}}>
      <ContentSidebar />
      <Activity />
    </Flex>
  )
}

export default SideContent