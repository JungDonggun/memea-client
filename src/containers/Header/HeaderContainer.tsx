import React from 'react'
import styled from '@emotion/styled'
import {
  ClockCircleOutlined,
  MenuOutlined
} from '@ant-design/icons'
import primaryColors from '../../../common/primaryColors'
import MemeaLogo from '../../components/logo/MemeaLogo'
import { Badge } from 'antd'

const Container = styled.div(() => ({
  backgroundColor: primaryColors.lightBlack,
  height: 56,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}))

const HeaderContainer: React.FunctionComponent = () => {
  return (
    <Container>
      <MenuOutlined style={{ color: '#FFFFFF', cursor: 'pointer', fontSize: 22 }}/>
      <MemeaLogo/>
      <Badge count={<ClockCircleOutlined style={{ color: '#CC0000' }}/>}>
        <a href="#" className="head-example"/>
      </Badge>
    </Container>
  )
}

export default HeaderContainer
