import React from "react";
import Table from "./table";

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      nbRestaurants: 0,
      sizeOfPage: 50,
      indexOfPage: 0
    };
  }

  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants() {
    var url = "http://localhost:8080/api/restaurants?page=" +
      this.state.indexOfPage +
      "&pagesize=" +
      this.state.sizeOfPage;

    fetch(url)
      .then(res => res.json())
      .then(resultat => {
        this.setState({

          nbRestaurants: resultat.count,
          restaurants: resultat.data
          });
          console.log("ok");
        })
      .catch(error => {
          console.log(error);
      })
  }

  indexPage = indexPagechild => {
    this.state.indexOfPage = indexPagechild;
    this.getRestaurants();
  };

  pageSize = pageSizeChild => {
    this.state.sizeOfPage = pageSizeChild;
    this.getRestaurants();
  };

  
  render() {
    return (
      <div>
        <Table
          titre={"TP Restaurants"}
          data={this.state.restaurants}
          rowsPerPage={this.state.sizeOfPage}
          parrentCallbackIndexPage={index => this.indexPage(index)}
          parrentCallbackPageSize={size => this.pageSize(size)}
          nbRestaurant={this.state.nbRestaurants}
        ></Table>
      </div>
    );
  }
}
export default Restaurants;
