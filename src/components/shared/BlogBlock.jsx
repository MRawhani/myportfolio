import React from "react";
import { Link } from "react-router-dom";

export default function BlogBlock({ blog,page }) {
  return (
    <div className="blogBlock">
        <div className={`blogBlock__line ${page? "blogBlock__line--visibleAll" : "" }`}></div>
      <div className="blogBlock__content">
   
       <div className='col-2 small-flex-mobile'>
       <h1 className="blogBlock__content--title">{blog.title}</h1>
        <p className="blogBlock__content--sub">{blog.subContent}</p>
      
        <Link to={`/blogPost/${blog._id}`} className="blogBlock__content--readMore"> Read More </Link>
       </div>
      {page&& <div className="col-1 no-margin-bottom">
       <img
          className='blogBlock__content--image'
          src={blog.image}
          alt=""
        />
       </div>}
      </div>
      <div className="blogBlock__blogger">
        <img
          className=""
          src={`${process.env.PUBLIC_URL}/images/blogger.svg`}
          alt=""
        />
        <div  className="blogBlock__blogger--info">
        <p className="">{blog.ownerId ? blog.ownerId.username:'Mohammed Rawhani'}</p>
        <p className="">{blog.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
