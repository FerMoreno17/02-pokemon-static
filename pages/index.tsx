import { Grid } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { MainLayout } from "../components/layouts";
import { GetStaticProps } from "next";
import pokeApi from "../api/axios";
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list";
import { PokemonCard } from "pokemon/components/ui";

const inter = Inter({ subsets: ["latin"] });
export const pokemonLimit = 151;

interface Props {
  pokemons: SmallPokemon[];
}

export default function Home({ pokemons }: Props) {
  return (
    <MainLayout title="Listado">
      <h1>Pokemon</h1>
      <Grid.Container gap={2} justify={"flex-start"}>
        {pokemons.map((pokemon, i) => (
          <PokemonCard key={i} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    `/pokemon?limit=${pokemonLimit}`
  );
  const pokemons = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      i + 1
    }.png`,
  }));

  return {
    props: {
      pokemons: pokemons,
    },
  };
};
