import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Bootstrap, Grid, Row, Col } from 'react-bootstrap'

class WhatsappChartUI extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className={"ontainer-fluid"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <h1> Testing me out </h1>
                    </div>
                </div>


            </div>
        )
    }
}

export default WhatsappChartUI;