import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const handleFavouriteToggle = () => {
    const alreadyFavourite = favourites.find((job) => job._id === data._id);
    dispatch(alreadyFavourite ? { type: "REMOVE_FAVOURITE", payload: data } : { type: "ADD_FAVOURITE", payload: data });
  };

  return (
    <Row className="mx-0 mt-3 p-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button variant={(favourites.find((job) => job._id === data._id) && "danger") || "primary"} onClick={handleFavouriteToggle}>
          {favourites.find((job) => job._id === data._id) ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
