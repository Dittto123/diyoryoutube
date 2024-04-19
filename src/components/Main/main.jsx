import { React, useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { category } from "../../constants";
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideosCard] = useState([]);
  const selectedCategoryHandler = (e) => {
    setSelectedCategory(e);
  };

  useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
				setVideosCard(data.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [selectedCategory])

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "100vh" }}>
        <Container width={"90%"} className="container-category">
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
