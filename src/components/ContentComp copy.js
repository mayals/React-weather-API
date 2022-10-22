// import {Container} from 'react-bootstrap';

import { Container } from "react-bootstrap";

const ContentComp = (props) =>{
  console.log(props.WeatherState)

                        return (
  
                        <Container>
                            <div>
                                <p>{ props.WeatherState?.temp }</p> 
                                <p>{ props.WeatherState?.city }</p> 
                                <p>{ props.WeatherState?.desc } </p>
                                <p>{ props.WeatherState?.humidity }</p>  
                                <p>{ props.WeatherState?.pressure }</p> 
                                <p>{ props.WeatherState?.wind } </p>
                                <p>{ props.WeatherState?.visibility } </p>
                                <p>{ props.WeatherState?.error }</p>
                                <p>{ props.WeatherState?.toast_message }</p> 
                            </div>
                       </Container> 
                        );
}
export default ContentComp