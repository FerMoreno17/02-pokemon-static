import Head from "next/head";
import React, { ReactNode } from "react";
import { Navbar } from "../ui";

interface IProps {
  children?: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

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
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Pagina informativa sobre el pokemon ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/images/imagePokemon.jpg`}
        />
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
