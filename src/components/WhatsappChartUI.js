import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';


class WhatsappChartUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            alertClass:"alert alert-success none",
            alertMessage:"successful "
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
                                <div className={this.state.alertClass} role="alert">{this.state.alertMessage} </div>
                                <div className={"form-group"}>

                                    <label for="exampleInputEmail1">
                                        Enter Message </label>
                                    <textarea class="form-control"  name="message"   onChange={this.handleChange} >
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
        this.setState({message: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.message == "") {
            
            this.setState({
                alertClass :"alert alert-warning ",
                alertMessage:"Message is a mandatory field "

            })
            

            return;
        }

        this.setState({
            alertClass :"alert alert-info ",
            alertMessage:"Processing ... "

        })


    }

}

export default WhatsappChartUI;