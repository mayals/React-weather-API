// import {Container} from 'react-bootstrap';
import "../App.css" 
import {Card, Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import temp from '../icons/temp.svg';







const ContentComp = (props) =>{
//   console.log(props.WeatherState)

                        return (             
                        <Container>
                        <div className="card mb-5 mt-5 bg-warning">
                        <div className="card-body">

                            <Row  className="mt-5 mb-5">
                                        
                                        <Col>
                                            <div className=" row text-light">
                                                    <div className="col p-5 ">
                                                        <Image  src={`http://openweathermap.org/img/wn/${props.WeatherState?.icon}@2x.png`}/>
                                                        <h4 className="card-title text-light cityfont p-5">{ props.WeatherState?.city }</h4>
                                                    </div>    
                                                    <div className="col mt-5 p-5 text-dark text-center">
                                                        <h2>{ props.WeatherState?.desc }</h2>
                                                        <br></br>
                                                        <ul className="undecoration">
                                                            <h5><i className="fa-solid fa-sun text-secondary text-center"></i>     { props.WeatherState?.sunrise }</h5>
                                                                <br></br>
                                                                <br></br>
                                                            <h5><i className="fa-solid fa-moon text-secondary text-center"></i>     { props.WeatherState?.sunset }</h5>
                                                        </ul>
                                                    </div>   
                                            </div>
                                        </Col>
                                        
                                        <Col>
                                            <div className="card p-5 text-center">
                                                
                                        
                                                <div className="col text-center ">
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title text-muted myfont ">{ props.WeatherState?.temp }  <span>°C</span></h5>   
                                                    </div>
                                                </div>

                                                <div className="col  text-center">
                                                    <div className="card-body">
                                                        <i className="fa-solid fa-temperature-half fa-3x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        


                            </Row>

                            <Row className="mt-5 mb-5">
                                     
                                                <div className="col">
                                                    <div className="card p-5 text-center"  style={{maxWidth: "18rem"}}>
                                                        <div className="col text-center">
                                                            <i className="fa-solid fa-droplet fa-3x"></i>
                                                        </div>

                                                        <div className="col text-center ">
                                                            <div className="card-body">
                                                                <h5 className="card-title text-muted ">{ props.WeatherState?.humidity }<span>%</span></h5>   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col">
                                                    <div className="card  p-5 text-center"  style={{maxWidth: "18rem"}}>
                                                        <div className="col  text-center">
                                                            <i className="fa-solid fa-compress fa-3x"></i>
                                                        </div>

                                                        <div className="col text-center ">
                                                            <div className="card-body">
                                                                <h5 className="card-title text-muted ">{ props.WeatherState?.pressure }  <span>Pa</span></h5>   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col">
                                                    <div className="card p-5 text-center"  style={{maxWidth: "18rem"}}>
                                                        <div className="col  text-center">
                                                            <i className="fa-solid fa-wind fa-3x"></i>
                                                        </div>

                                                        <div className="col text-center ">
                                                            <div className="card-body">
                                                                <h5 className="card-title text-muted ">{ props.WeatherState?.wind } <span>km</span></h5>   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col">
                                                    <div className="card p-5 text-center"  style={{maxWidth: "18rem"}}>
                                                        <div className="col  text-center">
                                                            <i className="fa-solid fa-eye fa-3x"></i>
                                                        </div>

                                                        <div className="col text-center ">
                                                            <div className="card-body">
                                                                <h5 className="card-title text-muted ">{ props.WeatherState?.visibility } <span>m</span></h5>   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                                
                                               
                            </Row>
                                    
                            
                            </div>
                            </div>
                          
                                 
                        </Container> 
                        );
}
export default ContentComp