import { Grid, Row, Text, Card } from "@nextui-org/react";
import React from "react";
import { SmallPokemon } from "../../interfaces/pokemon-list";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();
  function handleClick() {
    router.push(`/pokemon/${pokemon.id}`);
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body css={{ padding: 1 }}>
          <Card.Image src={pokemon.img} width={"100%"} height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
