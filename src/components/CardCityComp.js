import { Image } from "react-bootstrap";



const CardCityComp  = (props) => {
    
            return (
                <div className="col-md-6">
                    <div className="card card text-bg-info">
                        <div className="col text-center p-2">
                            <Image  src={`http://openweathermap.org/img/wn/${props.cardIcon}@2x.png`}/>
                            <h2>{ props.cardDesc }</h2>  
                            <h1 className="card-title text-light cityfont p-5">{ props.cardCityNm }</h1>
                        </div>    
                    </div>
                </div>
            )
}
export default CardCityComp ;