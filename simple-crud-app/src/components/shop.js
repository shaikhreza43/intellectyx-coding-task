import React from 'react';
import axios from 'axios';
import $ from 'jquery';



class Shop extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username:'',
            shopname:'',
            status:'',
            shopDetails:[]
            
           
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.OnChangeHandler = this.OnChangeHandler.bind(this);

     }



    componentDidMount(){
        axios.get('http://localhost:9000/shop/getAllShops')
        .then((res)=>{
            this.setState({shopDetails:res.data})
        })
        .catch(err=>{console.log(err)});
    }




    onSubmitHandler(e){
        e.preventDefault();
       const shop ={
           username:this.state.username,
           shopname:this.state.shopname,
           status:this.state.status
       }

       axios.post('http://localhost:9000/shop/create-shop',shop)
       .then((res)=>{
        alert('Shop Created Successfully');
        console.log(res);
        window.location = '/';
       })
       .catch(err=>{console.log(err)});

       console.log(shop);
    }
    OnChangeHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }

    fetchShopDetails(){
        return this.state.shopDetails.map(shop=>{
            return (
                <tr key={shop.username}>
                <td>{shop.username}</td>
                <td>{shop.status}</td>
                <td>{shop.date}</td>
                </tr>
            )
        })
    }




    render(){
        return (
          
                <div className="row">
                <div className="col-lg-3 col-md-5 col-sm-4">
                <form onSubmit={this.onSubmitHandler} className="form">

                <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" onChange={this.OnChangeHandler} className="form-control"></input>
                </div>
              
                <div className="form-group">
                <label>Shop Name</label>
                <input type="text" name="shopname" onChange={this.OnChangeHandler} className="form-control"></input>
                </div>
                
                <div className="form-group">
                <label>Status</label>
                <textarea name="status" onChange={this.OnChangeHandler} className="form-control"></textarea>
                </div>

             
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>

                {/* New Column */}

                <div className="col-lg-9 col-md-5 col-sm-6">

                <input type="text" id="myInput" placeholder="Search" className="form-control"></input>

                    <br/>

                <table className="table table-bordered">
                        <thead>
                            <tr>
                           
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                           {this.fetchShopDetails()}

                        
                        </tbody>
                        </table>
{/* 
                        <select className="float-left">
                        <option>10</option>    
                        <option>20</option>    
                        <option>100</option>    
                        </select> */}
{/* 
                        <nav aria-label="Page navigation example" className="float-right">
                        <ul className="pagination">
                           
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                        </nav> */}

                </div>


                </div>
           
            
          
        )
    }
}

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

export default Shop;