import React, { useState, useEffect }  from 'react';
import './App.css';
import Shop from './components/shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/pagination';
import axios from 'axios';
import EditShop from './components/editShop';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
// import ErrorHandler from './components/errorHandler';
import PageNotFound from './components/pageNotFound';

function App() {


  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  // const [error,setError] = useState({hasError:false})

  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:9000/shop/getAllShops');
      setShops(res.data);
      setLoading(false);
    };

    fetchShops();
  }, []);


  // Get current posts
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = shops.slice(indexOfFirstData, indexOfLastData);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="App">
     <h3>Simple Shop App</h3>
    <hr></hr>
    <div className="container">
    <Router>
    <Shop shops={currentData} loading={loading}/>
    <Pagination dataPerPage={dataPerPage} totalData={shops.length} paginate={paginate}/>

      <Switch>
        <Route exact path="/"></Route>
       <Route exact path="/edit-shop/:id" component={EditShop}></Route>
       <Route component={PageNotFound}></Route>
      </Switch>
      

      </Router>
      </div>
    </div>
  );
}

export default App;
