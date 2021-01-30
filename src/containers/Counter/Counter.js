import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment,decrement,add,subtract,storeResult,deleteResult} from '../../store/actions/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from "../../store/actions/actions";

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncreamentCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecreamentCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Sotre Result</button>
                <ul>
                    {this.props.storeResults.map(strResult =>(
                         <li onClick={()=>this.props.onDeleteResult(strResult.id)} key={strResult.id}>{strResult.value}</li>
                    ))}               
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
     return{
         ctr: state.ctr.counter,
         storeResults: state.res.results
     };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreamentCounter: () => dispatch(increment()),
        onDecreamentCounter: () => dispatch(decrement()),
        onAddCounter: () => dispatch(add(5)),
        onSubtractCounter: () => dispatch(subtract(5)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);