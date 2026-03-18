import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Lists(props) {
  const listrows = [];

  props.alldata.forEach((element) => {
    listrows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.author}</td>
        <td></td>
        <td></td>
      </tr>
    );
  });

  return (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{listrows}</tbody>
    </table>
  );
}

export default Lists;