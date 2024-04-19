import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { Logo } from "../../constants";
import { colors } from "../../constants/colors";
import { SearchBar } from "../index"

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      padding={2}
      marginBottom={""}
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "#fff",
      }}
    >
      <Link to={"/"} style={{color: "crimson", textDecoration: "none"}}>
        <Typography variant="h5">DiYORViBE</Typography>
        
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
