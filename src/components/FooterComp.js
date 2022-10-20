import {Container,Navbar } from 'react-bootstrap';

const FooterComp = () =>{
                        return (
                            <Navbar bg="primary" variant="dark" className="fixed-bottom">
                                <Container>
                           
                                    <div className="container-fluid">
                                        {/* <a className="navbar-brand" href="#">Fixed bottom</a> */}
                                    </div>

                                </Container>
                            </Navbar>
                        );
}
export default FooterComp ;