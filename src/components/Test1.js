import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incrementByAmount} from "../redux/counter-slice";


const Test1 = (props) => {
   
    const state = useSelector(state => state.counter);
    // console.log("Test1 props",props);
    console.log("Test1 state",state);

    const dispatch = useDispatch();

    useEffect( () => {
        console.log('DISPATCHING Test1 ')
        dispatch(incrementByAmount(1));
    },[])

    const {location} = props;
  
    return (<h2>Test component {location.pathname}</h2>)
}

export default Test1;