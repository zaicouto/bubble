import "./page.css";
import Layout from "./layout";
import YouTubeConverter from "@/components/youtube-converter";

export default function Home() {
  return (
    <Layout>
      <YouTubeConverter />
    </Layout>
  );
}
