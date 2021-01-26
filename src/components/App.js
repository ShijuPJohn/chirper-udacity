import React, {Component} from 'react'
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";

class App extends Component {
    componentDidMount() {
        this.props.handleInitialData()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                Starter Code
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {handleInitialData})(App)