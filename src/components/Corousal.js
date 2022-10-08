import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from './index.png';
class MyCarousel extends Component {
   
  static get CONTAINER_STYLE() {
    return {
    //   background: "black",
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "fit-content",
      width: "320px",
      textAlign: "center",
      alignItems: "center",
      background: "#ffffff",
      color: "#006699",
      fontFamily: "sans-serif",
      fontSize: "16px",
      textTransform: "uppercase",
     
      borderRadius: "10px",
      boxSizing: "border-box",
      margin: "40px 330px",
      boxShadow: "0px 2px 22px -3px rgba(0,0,0,0.27)",
      border: "1vmin solid black"
    };
  }

  static get CARD_STYLE_Heading() {
    return {
      background: "#006699",
      color: "#ffffff",
      fontFamily: "sans-serif",
      fontSize: "18px",
      padding: "20px",
      boxSizing: "border-box",
      borderRadius: "10px 10px 0 0"
    };
  }

  static get CARD_STYLE_Text() {
    return {
      background: "#006699",
      color: "#ffffff",
      fontFamily: "sans-serif",
      fontSize: "18px",
      padding: "20px",
      boxSizing: "border-box",
      borderRadius: "10px 10px 0 0"
    };
  }
  static get CARD_STYLE_Image() {
    return {
      color: "#ffffff",
      height: "15vmin",
      border: "1vmin solid black",
      boxShadow: "0px 2px 22px -3px rgba(0,0,0,0.27)",
      padding: "20px",
      boxSizing: "border-box",
      color: "#006699",
    };
  }
  render() {
    const cards = [{url:img,heading:"Graphing Calculator", text:"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"},{url:img,heading:"Easy Host Control", text:"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"}, {url:img,heading:"Math Formula Editor", text:"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"}];

    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={false} autoplay_speed={1000}>
        {cards.map((card) => (<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>)
    )}
        </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel;