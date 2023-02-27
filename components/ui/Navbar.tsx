import { useTheme, Text, Spacer } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        }
        alt="icono"
        width={40}
        height={40}
      />
      <Spacer />
      <Text color="white" css={{ fontSize: 30, fontWeight: "bold" }}>
        Pokemon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};
