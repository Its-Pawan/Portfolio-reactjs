import React from 'react'
import "./Blog.css"
// import Header from '../component/header/Header'


export default function Blog() {
  return (
    <div>
      {/* <Header headerHeading="Blogs" headerPageName="Blogs" /> */}
      <div className="blog-page">

        <iframe
          src="https://netinfo.in/blog"
          title="Netinfo"
          width="100%"
          height="750"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  )
}
