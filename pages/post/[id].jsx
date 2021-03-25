import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";

export default function Post({ post }) {
  const router = useRouter();
  console.log("POST", post);
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

Post.getInitialProps = async (ctx) => {
  console.log(ctx);

  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post,
  };
};
