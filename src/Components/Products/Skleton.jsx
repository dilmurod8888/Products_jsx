import React from "react";
import ContentLoader from "react-content-loader";

const Skleton = () => {
  return (
    
      <ContentLoader
        speed={2}
        width={320}
        height={500}
        viewBox="0 0 320 520"
        backgroundColor="#e3d3f3"
        foregroundColor=" #ecebeb"
      >
        <rect x="40" y="30" rx="10" ry="10" width="250" height="350" />
        <rect x="95" y="395" rx="5" ry="5" width="140" height="18" />
        <rect x="60" y="430" rx="5" ry="5" width="205" height="18" />
        <rect x="105" y="465" rx="5" ry="5" width="120" height="18" />
        
      </ContentLoader>
    
  );
};

export default Skleton
