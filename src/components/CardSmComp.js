


const CardSmComp  = (props) => {


    
   
    return (

            <div className="col">
                <div className="card p-5 text-center"  style={{maxWidth: "18rem"}}>
                    <div className="text-center">
                        <i className={props.cardFoawe}></i>
                    </div>

                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title text-center text-muted">
                                <span>{ props.cardText }</span> {props.cardUnit} 
                            </h5>   
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default CardSmComp;