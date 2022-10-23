import { Container, Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom"


const SearchComp = (props) =>{
    //   console.log(props.WeatherState)

        const inputHandler =(inputCity)=>{

                console.log(inputCity)
                props.setCityState(inputCity)
        }
                
        
        const clickHandler =(inputCity)=>{

                if ( inputCity !== "" ){
                        console.log(inputCity)
                        props.getWeatherApi(inputCity)
                
                }else{
                        alert("please input city name")
                }

        }
        

        return (

        <Container>
                <div className="mt-5 mb-5">
                        
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                       
                       
                                <Form className="d-flex justify-content-center">
                                        <Form.Control
                                                type="search"
                                                placeholder=" إدخل مدينتك.."
                                                className="me-2"
                                                aria-label="Search"
                                                onChange= { (e) =>{ inputHandler(e.target.value) } }
                                        />

                                <br></br>

                                <Link to="/city-weather">
                                        <Button 
                                                variant="success"
                                                onClick = { (e) =>{ clickHandler(e.target.value) } }
                                                                           
                                        >
                                        إبحث
                                        </Button>
                                </Link>
                       
                        </Form>

                </div>      
        </Container>
        );


}
export default SearchComp;