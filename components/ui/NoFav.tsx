import { Container, Text, Image } from "@nextui-org/react";
import React from "react";

function NoFav() {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text h1 css={{ opacity: 0.5 }}>
        Sin Favoritos
      </Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        width={250}
        height={250}
        css={{ opacity: 0.5 }}
        alt="noFavorites"
      />
    </Container>
  );
}

export default NoFav;
