import React from "react";
import styled from "styled-components";
import { MainButton } from "../../styles/styledComponents";
import { ArrowLeft } from "react-feather";
import { useRouter } from "next/router";
import endpoints from "../../services/api/index";
import fetch from "isomorphic-unfetch";
import ShareSM from "../../elements/ShareSM";
import CardVideoYT from "../../elements/CardVideoYT";
import Contact from '../../sections/Contact'

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(endpoints.posts.post_detail(params.slug));
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};

function Slug({ className, post }) {
  const router = useRouter();
  

  function returnBtn() {
    router.back();
  }
  return (
    <section className={className}>
      <div>
        <MainButton onClick={returnBtn}>
          <ArrowLeft /> Regresar
        </MainButton>
      </div>
      <div>
        <h1>{post?.title}</h1>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
      {post?.video && <CardVideoYT videoURL={post.video}/> }

      <ShareSM />

      <Contact/>
    </section>
  );
}

export default styled(Slug)`
  width: 80vw;
  margin: 0 auto;
  
`;
