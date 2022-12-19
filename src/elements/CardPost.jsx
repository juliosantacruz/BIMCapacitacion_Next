import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { wordSlicer } from "../utils";


function CardPost({ className, post }) {
  return (
    <Link
      href={{
        pathname: `/post/${post.slug}`,
      }}
    >
      <article className={className}>
        <div className="headerContent">
          <h3>{post.title.toUpperCase()}</h3>
        </div>
        <CardContent>
          <div className="tarjeta-texto">
            <p>{wordSlicer(post.overview, 150)}</p>
          </div>
          <div className="tarjeta-img">
            <Image src={post.thumbnail} width={200} height={150} alt="" />
          </div>
        </CardContent>
        <div className="cardFooter">
          <div className="tarjeta-categorias">
            <b>
              {post.tags.map((tag) => {
                return ` - ${tag.title}`;
              })}
            </b>
          </div>
        </div>
      </article>
    </Link>
  );
}
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
export default styled(CardPost)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  border: solid 1px black;
  border-radius: 30px;
  box-shadow: 20px 10px rgba(0, 0, 0, 0.39);
  margin: 20px auto;
  padding: 20px;

  :hover {
    background-color: #000000;
    color: white;
  }

  :active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  .tarjeta-texto {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  h3 {
    margin: 0 0 10px 0;
    /* padding: 0; */
  }

  .tarjeta-img > img {
    height: 120px;
    width: auto;
  }

  .tarjeta-categorias {
    font-weight: 600;
    font-style: oblique;
    margin: 10px 0 0 0;
  }

  @media screen and (min-width: 600px) {
    /* flex-direction: row; */
    max-width: 700px;
  }
`;
