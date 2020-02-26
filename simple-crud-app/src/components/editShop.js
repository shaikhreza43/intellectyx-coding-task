import React, { Component } from "react";
import axios from "axios";

class EditShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        shopname: "",
        status: "",
        shops: []
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

            this.setState({shops:response.data});
              
            // this.setState({
            
            // //  username: response.data.map(user=>user.username),
            //  shopname: response.data.map(shopname=>shopname.shopname),
            //  status: response.data.status,
            //  users: response.data.map(user => user.username)
            //  });    

          

            this.state.shops.map((shop)=>{
                this.setState({
                    username:shop.username,
                    shopname:shop.shopname,
                    status:shop.status
                   
                });
            })

            // response.data.map(shop=>{

            //     console.log(shop);
               
            //     this.setState({
            //         username:shop.username,
            //         shopname:shop.shopname,
            //         status:shop.status
                   
            //     });
            // })
         
          
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

    if(shop.username===''||shop.username===undefined||shop.username===null){
      console.error('Username cannot be empty');
      alert('Username Shouldn\'t be empty');
    }
    else if(shop.username.length<2){
      console.error('Username Should be of minimum 5 character long');
      alert('Username Should be of minimum 5 character long');
    }
    else if(shop.shopname===''||shop.shopname===undefined||shop.shopname===null){
      console.error('Shopname cannot be empty');
      alert('Shopname Shouldn\'t be empty');
    }
    else if(shop.shopname.length<2){
      console.error('Shopname Should be of minimum 5 character long');
      alert('Shopname Should be of minimum 5 character long');
    }
    else if(shop.status===''||shop.status===undefined||shop.status===null){
      console.error('Status cannot be empty');
      alert('Status Shouldn\'t be empty');
    }
    else if(shop.status.length<2){
      console.error('Status Should be of minimum 5 character long');
      alert('Status Should be of minimum 5 character long');
    }


    else{
      axios
      .post(
        "http://localhost:9000/shop/edit-shop/" + this.props.match.params.id,
        shop
      )
      .then(
          function(res){
            console.log(res.data);
            alert('Data Updated!');
            window.location = '/';
          }
          ).catch(err=>console.log("Error"+err));
    }

   

   
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