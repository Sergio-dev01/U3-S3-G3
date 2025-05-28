import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <div className="d-flex justify-content-between align-items-center mt-3 mb-5">
            <h1 className="display-4">Aziende Preferite</h1>
            <Link to="/MainSearch">
              <Button variant="primary">Torna alla Homepage</Button>
            </Link>
          </div>
          {favourites.length === 0 ? <p>Nessuna azienda aggiunta ai preferiti.</p> : favourites.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
