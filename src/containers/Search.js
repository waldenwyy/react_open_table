import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchData, refineData } from '../actions/restaurantActions';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            city: '',
            refine: '',
            error: ''
        }
    }

    onChangeCity = event => {
        this.setState({
            city: event.target.value
        })
    };

    onChangeRefine = event => {
        this.setState({
            refine: event.target.value
        })
    };

    onFormSubmit = event => {
        event.preventDefault();
        // console.log(this.props.refine);
        if (!this.state.city) {
            this.setState({
                error: 'Please enter a city name'
            })
        }else if(this.state.city !== this.props.city) {
            this.setState({
                error: ''
            })

            this.props.fetchData(this.state.city);
        }

        if (this.state.refine !== this.props.refine) {
            this.props.refineData(this.state.refine);
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
                                onChange={this.onChangeCity}
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
                                onChange={this.onChangeRefine}
                                value={this.state.refine}
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
      refine: state.restaurantReducer.refine
    } 
}
  

export default connect(mapStatetoProps, { fetchData, refineData })(Search);