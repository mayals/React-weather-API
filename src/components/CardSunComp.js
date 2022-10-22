import { Row } from "react-bootstrap";



const CardSunComp  = (props) => {
    
    
    
            return (
                <div className="col-md-3">
                    <div className="card" style={{ maxWidth: "36rem" }}>
                        <Row>
                            <div className="col text-center" >
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title  myfont ">   
                                                { props.cardText1 }  
                                            <span>
                                                <i className={props.cardFoawe1}></i>
                                            </span>
                                        </h5>
                                        <br></br>
                                        <h5 className="card-title myfont ">   
                                                { props.cardText2 }
                                            <span>
                                                <i className={props.cardFoawe2}></i>
                                            </span>
                                        </h5>   
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            )
}
export default CardSunComp;