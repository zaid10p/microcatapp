import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incrementByAmount} from "../redux/counter-slice";


const Test2 = (props) => {
    // console.log("Test2 props",props);
    const {location} = props;
   
    const state = useSelector(state => state.counter);
   // console.log("Test2 state",state);
   
    const dispatch = useDispatch();
    useEffect( () => {
        console.log('DISPATCHING Test2' )
        dispatch(incrementByAmount(2));
    },[])
   

    return (<div>
        <h2>Test component {location.pathname}</h2>
        <p>State  {JSON.stringify(state)}</p>
        </div>)
}

export default Test2;