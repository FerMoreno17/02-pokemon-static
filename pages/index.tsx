import { Button } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { MainLayout } from "../components/layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  console.log({ props });
  return (
    <MainLayout title="Listado">
      <h1>Pokemon</h1>
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </MainLayout>
  );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      name: "algo",
    },
  };
};
