import React from "react"
import ContentLoader from "react-content-loader"

const SquareLoader = (props) => (
    <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="60" rx="2" ry="2" width="100%" height="100%" />
    </ContentLoader>
)
export default SquareLoader