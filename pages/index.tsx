import React from 'react'
import HeaderContainer from '../src/containers/Header/HeaderContainer'
import MemeaHomePopularCardList from '../src/components/MemeaHome/MemeaHomePopularCardList'

const MemeaHome: React.FunctionComponent = () => {
  return (
    <div>
      <HeaderContainer/>
      <div>
        <MemeaHomePopularCardList/>
      </div>
    </div>
  )
}

export default MemeaHome
