import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { wordSlicer } from "../utils";  

function CardBlog({ className, post, quantity }) {
  return (
    <article className={className}>
      <Link href={`/post/${post.slug}`}>
        <Image src={post.thumbnail} alt="" width={300} height={200} />
        <div className="textDetail">
        <h2>{post.title}</h2>
        <p>{wordSlicer(post.overview, 150)}</p>
        <div className="tags">   
            {post.tags.map((tag) => {
              return ` - ${tag.title}`;
            })}
           </div>
        </div>
      </Link>
    </article>
  );
}
export default styled(CardBlog)`
  width: 30%;
  border: 2px solid black;

    border-radius:20px;
  img {
    width: 100%;
    padding:10px;
    height: auto;
    z-index:3;
    
  }
  h2{
    font-size:20px;
    margin:10px 0;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .textDetail{
    padding: 0 20px;
  }
  .tags {
    font-weight: 600;
    font-style: oblique;
    font-size:14px;
  }
`;
