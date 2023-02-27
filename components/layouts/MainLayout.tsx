import Head from "next/head";
import React, { ReactNode } from "react";
import { Navbar } from "../ui";

interface IProps {
  children?: ReactNode;
  title?: string;
}

export const MainLayout = ({ children, title }: IProps) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon web app"}</title>
        <meta name="author" content="Fernando Moreno" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`pokemon, pokedex, ${title}`} />
      </Head>
      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
