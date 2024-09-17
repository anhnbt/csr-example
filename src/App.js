import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4 text-white">
        Client-Side Rendered Posts
      </h1>
      {posts.slice(0, 5).map((post) => (
        <Card key={post.id} className="mb-4 text-white bg-dark">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default App;
