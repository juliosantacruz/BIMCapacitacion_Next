import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { wordSlicer } from "../utils";

function CardBlog({ className, post, quantity }) {
  return (
    <article className={className}>
      <Link href={`/post/${post.slug}`}>
        <Image src={post.thumbnail} alt="" width={200} height={150} />
        <div className="textDetail">
          <h3>{post.title.toUpperCase()}</h3>
          {/* <p>{wordSlicer(post.overview, 150)}</p> */}
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
  margin: 10px 0;
  width: 80%;
  border: 2px solid black;
  border-radius: 20px;

  @media screen and (min-width: 600px) {
    width: 45%;
  }
  @media screen and (min-width: 800px) {
    width: 32%;
  }
  @media screen and (min-width: 1200px) {
    width: 23%;
  }

  img {
    width: 100%;
    padding: 10px;
    height: auto;
    z-index: 3;
  }
  h3 {
    margin: 10px 0;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .textDetail {
    padding: 0 20px;
  }
  .tags {
    font-weight: 600;
    font-style: oblique;
    font-size: 14px;
    margin: 0 0 10px 0;
  }
`;
