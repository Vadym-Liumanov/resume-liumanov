import React from "react"
import AsideBlock from "../../components/asideBblock/AsideBlock"
import MainBlock from "../../components/mainBlock/MainBlock"

import rightImage from './../../images/abstract_1.svg'
import leftImage from './../../images/abstract_2.svg'

const Main = () => {
  return (
    <>
      <div className="container">
        <img className="right-image abstract-image" src={rightImage} alt="abstract_1" title="abstract_1" />
        <img className="left-image abstract-image" src={leftImage} alt="abstract_2" title="abstract_2" />
        <AsideBlock />
        <MainBlock />
      </div>

      <div className="invisible">
        <p>resolution below 320px is not supported</p>
      </div>
    </>
  )
}

export default Main