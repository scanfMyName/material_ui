import React from "react";

import "./Corousal.css";
// import ReactCardCarousel from "react-card-carousel";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import img from './index.png';
// class MyCarousel extends Component {
   
//   static get CONTAINER_STYLE() {
//     return {
//     //   background: "black",
//       position: "relative",
//       height: "100vh",
//       width: "100%",
//       display: "flex",
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "flex-start"
//     };
//   }

//   static get CARD_STYLE() {
//     return {
//       height: "fit-content",
//       width: "320px",
//       textAlign: "center",
//       alignItems: "center",
//       background: "#ffffff",
//       color: "#006699",
//       fontFamily: "sans-serif",
//       fontSize: "16px",
//       textTransform: "uppercase",
     
//       borderRadius: "10px",
//       boxSizing: "border-box",
//       margin: "40px 330px",
//       boxShadow: "0px 2px 22px -3px rgba(0,0,0,0.27)",
//       border: "1vmin solid black"
//     };
//   }

//   static get CARD_STYLE_Heading() {
//     return {
//       background: "#006699",
//       color: "#ffffff",
//       fontFamily: "sans-serif",
//       fontSize: "18px",
//       padding: "20px",
//       boxSizing: "border-box",
//       borderRadius: "10px 10px 0 0"
//     };
//   }

//   static get CARD_STYLE_Text() {
//     return {
//       background: "#006699",
//       color: "#ffffff",
//       fontFamily: "sans-serif",
//       fontSize: "18px",
//       padding: "20px",
//       boxSizing: "border-box",
//       borderRadius: "10px 10px 0 0"
//     };
//   }
//   static get CARD_STYLE_Image() {
//     return {
//       color: "#ffffff",
//       height: "15vmin",
//       border: "1vmin solid black",
//       boxShadow: "0px 2px 22px -3px rgba(0,0,0,0.27)",
//       padding: "20px",
//       boxSizing: "border-box",
//       color: "#006699",
//     };
//   }
//   render() {
//     const cards = [{url:img,heading:"Graphing Calculator", text:"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"},{url:img,heading:"Easy Host Control", text:"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"}, {url:img,heading:"Math Formula Editor", text:"Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica"}];

//     return (
//       <div style={MyCarousel.CONTAINER_STYLE}>
//         <ReactCardCarousel autoplay={false} autoplay_speed={1000}>
//         {cards.map((card) => (<Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image={card.url}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {card.heading}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {card.text}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>)
//     )}
//         </ReactCardCarousel>
//       </div>
//     );
//   }
// }

// export default MyCarousel;




















/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Efren Reyes',
            desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
            image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
        },
    },
    {
        player: {
            title: "Ronnie O'Sullivan",
            desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
            image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
        },
    },
    {
        player: {
            title: 'Shane Van Boening',
            desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
            image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
        },
    },
    {
        player: {
            title: 'Mike Sigel',
            desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
            image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
        },
    },
    {
        player: {
            title: 'Willie Mosconi',
            desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
            image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const MyCarousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
      <div className="MyHtml">
        <div classname="MyBody">
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default MyCarousel;