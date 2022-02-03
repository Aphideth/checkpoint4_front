import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  const [recipesList, setRecipesList] = useState([]);

  const getRecipes = () => {
    Axios.get("http://localhost:8000/").then(({ data }) => {
      setRecipesList(data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around p-sm">
        {recipesList.map((val, key) => {
          return (
            <Card className="mb-4" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={val.image} />
              <Card.Body>
                <Card.Title>
                  <h2>{val.name}</h2>
                </Card.Title>
                <Card.Text>
                  <h4>
                    Description : <br /> {val.description}
                  </h4>
                </Card.Text>
                <Button variant="dark">More</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
