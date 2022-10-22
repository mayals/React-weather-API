import { Container, Form, Button} from "react-bootstrap";



const SearchComp = (props) =>{
    //   console.log(props.WeatherState)
    
                              return (
                              <Container>
                                        <div className="mt-5 mb-5">
                                                
                                                <Form className="d-flex">
                                                        <Form.Control
                                                                type="search"
                                                                placeholder=" إدخل مدينتك.."
                                                                className="me-2"
                                                                aria-label="Search"
                                                        />
                                                        <br></br>
                                                        <Button 
                                                            variant="success"
                                                            onClick = {() =>{ console.log("clicked") }}
                                                           
                                                        >
                                                        إبحث
                                                        </Button>
                                                </Form>
                                        </div>      
                              </Container>
                              );
}
export default SearchComp;