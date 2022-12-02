const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_V1 = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
    
    posts: {
      post_list: `${API_URL}/api/${API_V1}/post`,
      post_detail: (slug)=> `${API_URL}/api/${API_V1}/post/${slug}`,
      //Todo all
    },
 
  };
   
  
  export default endpoints;
  