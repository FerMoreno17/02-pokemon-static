import { GetStaticPaths, GetStaticProps } from "next";
import { pokeApi } from "pokemon/api";
import { PokemonFull } from "pokemon/interfaces";
import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { pokemonLimit } from "../index";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";

interface Props {
  pokemon: PokemonFull;
}

const PokemonPage = ({ pokemon }: Props) => {
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
              <Button color={"gradient"} ghost>
                Guardar en favoritos
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (params) => {
  const { data } = await pokeApi.get<PokemonFull>(
    `/pokemon/${params?.params?.id}`
  );

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
