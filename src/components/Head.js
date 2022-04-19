import React from "react"
import globe from "../resources/images/globe.png"

function Head() {
    return (
      <div className="header">
          <img className="header__logo" src={globe} alt=""/>
          <span className="header__title">my concert journal.</span>
      </div>  
    )
}

export default Head