import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchData } from '../actions/restaurantActions';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            city: '',
            error: ''
        }
    }

    onChange = event => {
        this.setState({
            city: event.target.value
        })

    };

    onFormSubmit = event => {
        event.preventDefault();

        if (!this.state.city) {
            this.setState({
                error: 'Please enter a city name'
            })
        } else {
            this.setState({
                error: ''
            })
            this.props.fetchData(this.state.city);
        }
    };

    render() {
        return (
            <Row>
                <Col>
                    <Form onSubmit={this.onFormSubmit} className="form-inline row mt-5">
                        <FormGroup className="col-12 col-md-4">
                            <Label className="sr-only" for="cityName">City</Label>
                            <Input
                                type="text"
                                name="cityName"
                                className="mb-2 mr-md-2 w-100"
                                placeholder="City"
                                onChange={this.onChange}
                                value={this.state.city}
                                
                            />
                        </FormGroup>

                        <FormGroup className="col-12 col-md-4">
                            <Label className="sr-only" for="refine">Address, Name or Area</Label>
                            <Input
                                type="text"
                                name="refine"
                                className="mb-2 mr-md-2 w-100"
                                placeholder="Address, Name or Area"
                            />
                        </FormGroup>

                        <Button
                          className="col-6 col-md-2 mb-2 w-50 mx-auto mx-md-2" color="primary">
                              Search
                        </Button>

                        {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                    </Form>
                </Col>
            </Row>
        );
    }
};

// const mapDispatchProps = (dispatch) => {
//     return {
//       onFetchData: (filter) => {
//         dispatch(fetchData(filter));
//       }
//     }
//   }
const mapStatetoProps = (state) => {
    return {
      city: state.restaurantReducer.city,
    } 
}
  

export default connect(mapStatetoProps, { fetchData })(Search);