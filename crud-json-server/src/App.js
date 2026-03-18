import React from "react";
import Lists from "./Lists";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        id: "",
        title: "",
        author: ""
      }
    };
  }

  getLists = () => {
    this.setState({ loading: true });

    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          loading: false,
          alldata: result
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    const loading = this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <Lists alldata={this.state.alldata} />
    );

    return (
      <div className="container mt-4">
        <span className="title-bar">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.getLists}
          >
            Get Lists
          </button>
        </span>

        <div className="mt-3">{loading}</div>
      </div>
    );
  }
}

export default App;