import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
// import Header from "./Header";
// import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      {/* children_wraps content */}

      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "EDM Music Services",
  description:
    "EDM Music Services specialises in Music Production, ghost production.",
  keywords: "Ghost Production, Music Services, Music consultancy.",
};
