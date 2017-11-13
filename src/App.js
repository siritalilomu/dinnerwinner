import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlaceList from './Components/PlaceList';
import SearchForm from './Components/SearchForm';
import token from './.config';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      places: []
    };
  }
//
//   componentDidMount() {
//     let lat = '37.095169'
//     let lon = '-113.575974'
//     let type = 'restaurant'
//     fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${type}&latitude=${lat}&longitude=${lon}`, {
//       headers: {
//               'Authorization': `Bearer N_n6DJInFIFS0IeamGRvMGVUmOW8RUDmBWTCKrR0kPmnw8Z3prjTvAo3tCzLQHu2__cVdptwfDTrYV4iM6C4_Z2PnIghj9JMAnNgwnow4dulmyLNl4AKaa5F894FWnYx`
//       }
//     })
//
//     .then(response => response.json())
//     .then(responseData => {
//       this.setState({ places: responseData.businesses})
//     })
//     .catch(error => {
//       console.log('Error fetching and parsing data ', error)
//     });
//   }


  componentWillMount = () => {
    this.doSearch()
  }

  doSearch = (query) => {
    let token = 'N_n6DJInFIFS0IeamGRvMGVUmOW8RUDmBWTCKrR0kPmnw8Z3prjTvAo3tCzLQHu2__cVdptwfDTrYV4iM6C4_Z2PnIghj9JMAnNgwnow4dulmyLNl4AKaa5F894FWnYx'
    let lat = '37.095169'
    let lon = '-113.575974'
    let type = query
    if (type == undefined) {
      type = 'food'
    } else {
      fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${type}&latitude=${lat}&longitude=${lon}`, {
        headers: {
                  'Authorization': `Bearer ${token}`
          }
        })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ places: responseData.businesses})
      })
      .catch(error => {
          console.log('Error fetching and parsing data ', error)
      });
    }
  }






  render() {
    console.log(this.state.places);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Food Search</h1>
            <SearchForm onSearch={this.doSearch} />
          </div>
        </div>
        <div className="main-content">
          <PlaceList businesses={this.state.places} />
        </div>
      </div>
    );
  }
}
