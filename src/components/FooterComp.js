import {Container,Navbar } from 'react-bootstrap';

const FooterComp = () =>{
                        return (
                            <Navbar bg="dark" variant="light" className="fixed-bottom">
                                <Container>
                           
                                    <div className="container-fluid text-light text-muted">
                                        developed by @mayals
                                    </div>

                                </Container>
                            </Navbar>
                        );
}
export default FooterComp ;