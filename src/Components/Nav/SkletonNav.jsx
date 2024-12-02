import React from 'react'
import ContentLoader from 'react-content-loader'

const SkletonNav = () => {
  return (
   

    <ContentLoader
      height={100}
      width={1200}
      viewBox="0 0  1200 100"
      backgroundColor="#e3d3f3"
      foregroundColor="#ecfbeb"
   
    >
      <circle cx="45" cy="45" r="40" />
      <rect x="120" y="32" rx="7" ry="5" width="140" height="20" />
      <rect x="920" y="32" rx="7" ry="5" width="150" height="20" />
      <rect x="300" y="28" rx="7" ry="7" width="580" height="22" />
      <circle cx="1150" cy="40" r="30" />
    </ContentLoader>
  )
}


export default SkletonNav