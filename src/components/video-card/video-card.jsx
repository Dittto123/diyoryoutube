import {
    Avatar,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { colors } from "../../constants/colors";
  import moment from "moment";
  import { CheckCircle } from "@mui/icons-material";
  import { Link } from 'react-router-dom'
  
  const VideoCard = ({ video }) => {
    console.log(video);
    return (
      <Card
        sx={{
          width: { xs: "100%", sm: "360px", md: "360px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            sx={{
              width: { xs: "330px", sm: "360", md: "360px" },
              height: "190px",
            }}
          />
        </Link>
  
        <CardContent
          sx={{
            background: colors.primary,
            height: "200px",
            position: "relative",
          }}
        >
          <Link to={`/video/${video.id.videoId}`}>
            <Typography my={"5px"} sx={{ opacity: ".4" }}>
              {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
            <Typography variant={"subtitle1"} fontWeight={"bold"}>
              {video?.snippet?.title.slice(0, 50)}
            </Typography>
            <Typography variant={"subtitle2"} sx={{ opacity: 0.6 }}>
              {video?.snippet?.description.slice(0, 65)}
            </Typography>
          </Link>
          <Link to={`/channel/${video.snippet.channelId}`}></Link>
          <>
            <Stack
              direction={"row"}
              position={"absolute"}
              bottom={"10px"}
              alignItems={"center"}
              gap={"5px"}
              sx={{ mt: "5px" }}
            >
              <Avatar src={video?.snippet?.thumbnails?.high?.url} sx={{}} />
              <Typography variant={"subtitle2"} color={"gray"} sx={{ ml: "5px" }}>
                {video?.snippet?.channelTitle}{" "}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Stack>
          </>
        </CardContent>
      </Card>
    );
  };
  
  export default VideoCard;
  