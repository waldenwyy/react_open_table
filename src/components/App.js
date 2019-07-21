import React from 'react';
import '../App.css';
import Search from '../containers/Search'
import Header from '../components/Header'
import RestaurantContainer from '../containers/RestaurantContainer'
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Search />
        <RestaurantContainer />
      </Container>
    </div>
  );
}

export default App;
