import React from "react";
import { Alert } from "react-bootstrap";
class Blog extends React.Component {
  render() {
    return (
      <div>
        <h1>Blogs page</h1>
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </div>
    );
  }
}

export default Blog;
