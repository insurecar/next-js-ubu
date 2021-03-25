import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Posts() {
  return (
    <MainLayout>
      <Head>
        <title>Posts page | Next course</title>
      </Head>
      <h1>Posts page</h1>
    </MainLayout>
  );
}
