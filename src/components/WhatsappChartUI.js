import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';
import axios from 'axios';


class WhatsappChartUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            contacts:'',
            alertClass: "alert alert-success none",
            alertMessage: "successful "
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
                                        Enter Contacts</label>

                                    <input type="text" placeholder="Sepearte contacts with commas eg +256779820962,+2569398393" name="contacdts" value={state.contacts} onChange={handleChange} />


                                </div>


                                <div className={"form-group"}>

                                    <label for="exampleInputEmail1">
                                        Enter Message </label>
                                    <textarea class="form-control" name="message" onChange={this.handleChange} >
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
        const name = e.target.name;
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.message == "") {

            this.setState({
                alertClass: "alert alert-warning ",
                alertMessage: "Message is a mandatory field "

            })


            return;
        }

        this.setState({
            alertClass: "alert alert-info ",
            alertMessage: "Processing ... "

        });


        axios.post(
            'http://localhost:3005',
            { bodytext: this.state.message },
            { headers: { 'Content-Type': 'application/json' } }
        ).then(res => {
            this.setState({
                alertClass: "alert alert-success ",
                alertMessage: "Record Sent Succesfully"

            });
        })




    }

}

export default WhatsappChartUI;