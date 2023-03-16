import { GetStaticPaths, GetStaticProps } from "next";
import { pokeApi } from "pokemon/api";
import { PokemonFull } from "pokemon/interfaces";
import React, { useState } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { pokemonLimit } from "../index";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import handleAddFavourites from "pokemon/utils/localstorage";
import { existInFavourites } from "../../utils/localstorage";
import { getPokemonInfo } from "../../utils/getPokemonInfo";

interface Props {
  pokemon: PokemonFull;
}

const PokemonPage = ({ pokemon }: Props) => {
  const [favourites, setFavourites] = useState(existInFavourites(pokemon.id));

  function handleFavouritesToggle() {
    handleAddFavourites(pokemon.id);
    setFavourites(!favourites);
  }

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ marginTop: 20 }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width={"100%"}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color={"gradient"}
                onPress={handleFavouritesToggle}
                ghost={!favourites}
              >
                {!favourites ? "Guardar en favoritos" : "Quitar de favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction={"row"} display={"flex"} gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsArray = [...Array(pokemonLimit)].map(
    (value, index) => `${index + 1}`
  );

  return {
    paths: pokemonsArray.map((id) => ({
      params: { id: id },
    })),
    //fallback: false, //muestra el 404 si la pagina no existe
    fallback: "blocking", //permite continuar con el proceso, es decir, va a generar el id
    //lo va a pasar al getStaticProps y este va a poder hacer la consulta
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemon = await getPokemonInfo(params?.id as string);
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      pokemon: pokemon,
    },
    revalidate: 86400, //revalida cada 24hs, es decir 86400 seg
  };
};

export default PokemonPage;
