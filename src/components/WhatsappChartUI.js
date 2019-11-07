import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';


class WhatsappChartUI extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [], text: ''
         };

    }

    static propTypes = {
        prop: PropTypes
    }

   

    render() {
        return (
            <div className={"Home-wrapper , col-md-6"}>
                <div className={"ontainer-fluid"}>
                    <div className={"row"}>
                        <div className={"col-md-10"}>
                            <form role="form">
                                <h1> CHART SIMULATOR </h1>
                                <div className={"form-group"}>

                                    <label for="exampleInputEmail1">
                                        Enter Message </label>
                                    <textarea class="form-control" >

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
}

export default WhatsappChartUI;