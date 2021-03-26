import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) return load();
  }, []);

  if (!post) {
    return (
      <MainLayout title="loading...">
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={post.title}>
      <h1>Post {post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <button>
        <Link href="/posts">
          <a>Back to posts</a>
        </Link>
      </button>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query: { id }, req }) => {
  if (!req) {
    return {
      post: null,
    };
  }
  const response = await fetch(`http://localhost:4200/posts/${id}`);
  const post = await response.json();

  return {
    post,
  };
};

// export async function getServerSideProps({ query: { id }, req }) {
//   if (!req) {
//     return {
//       post: null,
//     };
//   }
//   const response = await fetch(`http://localhost:4200/posts/${id}`);
//   const post = await response.json();

//   return {
//     props: {
//       post: post,
//     },
//   };
// }
