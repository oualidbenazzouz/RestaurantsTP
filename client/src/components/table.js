import React, { Component } from "react";
import MaterialTable from "material-table";
import TablePagination from "@material-ui/core/TablePagination";

class Table extends Component {

  constructor(props) {

    super(props);

    this.state = {
      columns: [
        { title: "Name", field: "name" },
        { title: "Cuisine", field: "cuisine" },
        { title: "Borough ", field: "borough" }
        
      ],
      rowsPerPage: 50,
      indexOfPage: 0
    };
  }

  
  setNewIndexPage(event, index) {
    this.setState({ indexOfPage: index });
    this.props.parrentCallbackIndexPage(index);
  }

  setNewPageSize(event, newpagesize) {
    this.state.rowsPerPage = parseInt(newpagesize.key);
    this.props.parrentCallbackPageSize(this.state.rowsPerPage);
  }


  render() {
    return (
      <div>
        <div>
          <MaterialTable
            style={{ width: 1000 }}
            title={this.props.titre}
            columns={this.state.columns}
            data={this.props.data}
            options={{
              search: false,
              exportButton: false,
              paging: false
            }}
          />
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          count={this.props.nbRestaurant}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.indexOfPage}
          onChangeRowsPerPage={(e, npz) => this.setNewPageSize(e, npz)}
          onChangePage={(e, i) => this.setNewIndexPage(e, i)}
        />
      </div>
    );
  }
}
export default Table;
