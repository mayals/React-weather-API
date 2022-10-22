import { Row } from "react-bootstrap";



const CardLgComp  = (props) => {
    
    
    
            return (
                <div className="col-md-3">
                    <div className="card" style={{maxWidth: "36rem"}}>
                        <Row>
                            <div className="col text-center">
                                <h5 className="card-body">
                                    <i className={props.cardFoawe}></i>
                                </h5>
                            </div>
                            <div className="col text-center" >
                                <div className="card-body">
                                    <div>
                                        <h1 className="card-title text-muted myfont ">{ props.cardText }  <span>{props.cardUnit}</span></h1>   
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            )
}
export default CardLgComp;