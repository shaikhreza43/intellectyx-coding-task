import React, { Component } from "react";
import axios from "axios";

class EditShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        shopname: "",
        status: "",
        users: []
      };

    this.OnChangeHandler = this.OnChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

   
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/shop/getAllShops")
      .then(response => {
          console.log(response.data);
        if (response.data.length > 0) {

            
              
            // this.setState({
            
            // //  username: response.data.map(user=>user.username),
            //  shopname: response.data.map(shopname=>shopname.shopname),
            //  status: response.data.status,
            //  users: response.data.map(user => user.username)
            //  });    

            response.data.map(shop=>{
                this.setState({
                    username:shop.username,
                    shopname:shop.shopname,
                    status:shop.status
                   
                });
            })
         
          
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  OnChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const shop = {
      username: this.state.username,
      shopname: this.state.shopname,
      status: this.state.status
    };

    console.log(shop);

    axios
      .post(
        "http://localhost:9000/shop/edit-shop/" + this.props.match.params.id,
        shop
      )
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className="col-lg-8">
        <h3>Edit Shop</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label>Username: </label>
            {/* <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.OnChangeHandler}
              name="username"
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select> */}

            <input type="text" readOnly required className="form-control" value={this.state.username}
              onChange={this.OnChangeHandler}
              name="username"></input>
          </div>
          <div className="form-group">
            <label>Shopname: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.shopname}
              onChange={this.OnChangeHandler}
              name="shopname"
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input
              type="text"
              className="form-control"
              value={this.state.status}
              onChange={this.OnChangeHandler}
              name="status"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Shop"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}


export default EditShop;