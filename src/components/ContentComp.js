// import {Container} from 'react-bootstrap';

const ContentComp = (props) =>{
  console.log(props.WeatherState)

                        return (
                            <div>
                            { props.WeatherState?.temp } <br/>
                            { props.WeatherState?.city } <br/>
                            { props.WeatherState?.desc } <br/>
                            { props.WeatherState?.humidity } <br/>
                            { props.WeatherState?.pressure } <br/>
                            { props.WeatherState?.wind } <br/>
                            { props.WeatherState?.visibility } <br/>
                            { props.WeatherState?.error } <br/>
                            { props.WeatherState?.toast_message } <br/>
                            </div>
                       
                        );
}
export default ContentComp