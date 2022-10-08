import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SimpleAccordion from "./Accordion";
import { Container } from "@mui/system";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const API = () => {
  const cards = [
    {
      urlJoiningWaitlist: "index.png",
      urlViewDoc: "index.png",
      heading: "Admin API",
      Headingtext:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
      TypeAuth: "API Token",
      authText: "Start",
      pricing: [
        { Heading: "Generous", insideText: "Lorem ipsum" },
        { Heading: "Generous", insideText: "Lorem ipsum" },
        { Heading: "Generous", insideText: "Lorem ipsum" },
      ],
    },

    {
      urlJoiningWaitlist: "index.png",
      urlViewDoc: "index.png",
      heading: "Builder API",
      Headingtext:
        "Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica",
      TypeAuth: "OAuth",
      authText: "Start",
      pricing: [
        { Heading: "Generous", insideText: "Lorem ipsum" },
        { Heading: "Generous", insideText: "Lorem ipsum" },
        { Heading: "Generous", insideText: "Lorem ipsum" },
      ],
    },
  ];

  //aom 

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        rowGap: "4vmin",
        columnGap: "4vmin",
      }} 
    >
      {cards.map((card) => (
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.Headingtext}
              </Typography>
              <Container sx={{
                marginLeft:"-4vmin"
      }} >      
                <Typography gutterBottom variant="h6" component="div">
                  Authorization: {card.TypeAuth}
                </Typography>
                <Typography variant="body4" color="text.secondary">
                  {card.authText}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Pricing
                </Typography>
                {card.pricing.map((price) => (
                  // console.log(price.Heading)
                  <SimpleAccordion
                    heading={price.Heading}
                    text={price.insideText}
                  />
                ))}
              </Container>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Button variant ="contained" size="small" color="primary" endIcon={<ArrowForwardIcon/>}>
              Join Waitlist
            </Button>
            <Button variant ="outlined" size="small" color="primary" endIcon={<ArrowForwardIcon/>}>
              View Docs
              
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default API;
