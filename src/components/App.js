import React, {Component} from 'react'
import Left from './Left'
import Right from './Right'
import Basket from './Basket'
import {connect} from 'react-redux'

class App extends Component {
    
    render() {
        return (
            <div className="l-site_wrap js-body">
                <div className="l-site js-site">
                    <div className="l-site_inner">
                        <div className="grid">
                            <div className="grid__row">
                                <div className="col-1-1">
                                    <h1>Калькулятор</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid__row">
                                <div className="col-1-1 js-this-calc">
                                    <div className="wincalc">
                                        <Left />
                                        <Right/>
                                        {this.props.order.length > 0 && <Basket/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default connect((state) => {
    return {
        order: state.basket.order
    }
}, {})(App)

