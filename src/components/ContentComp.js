// import {Container} from 'react-bootstrap';
import "../App.css" 
import {Card, Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import temp from '../icons/temp.svg';
import CardSmComp from "./CardSmComp"
import CardLgComp from "./CardLgComp"
import CardSunComp from "./CardSunComp"
import CardCityComp  from "./CardCityComp"



const ContentComp = (props) =>{
//   console.log(props.WeatherState)

                    return (             
                        <Container>
                        <div className="card mb-5 mt-5 bg-secondary">
                            <div className="card-body">

                                <Row  className="mt-5 mb-5">
                                        
                                    <CardCityComp cardIcon={ props.WeatherState?.icon} 
                                                  cardDesc={props.WeatherState?.desc}
                                                  cardCityNm={ props.WeatherState?.city }
                                    />   
                                    <CardLgComp cardText={ props.WeatherState?.temp} 
                                                cardUnit="°C"
                                                cardFoawe="fa-solid fa-temperature-half fa-3x"
                                    />
                                    <CardSunComp cardText1= { props.WeatherState?.sunrise } 
                                                 cardText2= { props.WeatherState?.sunset }
                                                 cardFoawe1= "fa-solid fa-sun fa-1x"
                                                 cardFoawe2= "fa-solid fa-moon fa-1x"
                                    /> 
                                </Row>

                                <Row className="mt-5 mb-5">              
                                    <CardSmComp cardText= {props.WeatherState?.humidity} 
                                                cardUnit="%"
                                                cardFoawe="fa-solid fa-droplet fa-3x"
                                    />
                                    <CardSmComp cardText= {props.WeatherState?.wind}
                                                cardUnit="km"
                                                cardFoawe="fa-solid fa-wind fa-3x"
                                    />
                                    <CardSmComp cardText= {props.WeatherState?.visibility}
                                                cardUnit="m"
                                                cardFoawe="fa-solid fa-eye fa-3x"
                                    />
                                    <CardSmComp cardText= {props.WeatherState?.pressure}
                                                cardUnit="Pa"
                                                cardFoawe="fa-solid fa-compress fa-3x"
                                    />                  
                                </Row>

                            </div>
                        </div>        
                        </Container> 
                    );
}
export default ContentComp