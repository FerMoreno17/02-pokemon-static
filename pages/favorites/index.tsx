import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import NoFav from "pokemon/components/ui/NoFav";
import { getPokemonsList } from "../../utils/localstorage";

const Favoritos = () => {
  const [pokemonFavList, setPokemonFavList] = useState<number[]>([]);

  useEffect(() => {
    setPokemonFavList(getPokemonsList());
  }, []);

  function handleClick() {
    console.log("press");
  }

  return (
    <MainLayout title="Favoritos">
      {pokemonFavList.length ? (
        <Grid.Container gap={2} direction={"row"} justify={"flex-start"}>
          {pokemonFavList.map((id) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card isHoverable isPressable onClick={handleClick}>
                <Card.Body css={{ padding: 1 }}>
                  <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    width={"100%"}
                    height={140}
                  />
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      ) : (
        <NoFav />
      )}
    </MainLayout>
  );
};

export default Favoritos;
