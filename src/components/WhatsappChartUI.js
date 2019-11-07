import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';


class WhatsappChartUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }


    render() {
        return (
            <div className={"Home-wrapper , col-md-6"}>
                <div className={"ontainer-fluid"}>
                    <div className={"row"}>
                        <div className={"col-md-10"}>
                            <form onSubmit={this.handleSubmit} >
                                <h1> CHART SIMULATOR </h1>
                                <div className={"form-group"}>

                                    <label for="exampleInputEmail1">
                                        Enter Message </label>
                                    <textarea class="form-control" >
                                        {this.state.message}
                                    </textarea>
                                </div>


                                <div className={"form-group"}>


                                    <button type="submit" className="btn btn-primary">
                                        Submit </button>
                                </div>




                            </form>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

    static propTypes = {
        prop: PropTypes
    }


    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.message.length) {
            alert("Nothing to commit")
            return;
        }

    }

}

export default WhatsappChartUI;