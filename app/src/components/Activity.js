import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import Loader from 'react-loader-spinner'

const Activity = props => {
    return (
        <div>
        <div className='display'>
            {!props.activity && !props.isLoading && <h2>You Bored 🤔?</h2>}
            {props.activity && !props.isLoading && <h2 className='activities'>{props.activity.activity}</h2>}
         </div>
            <button className='click' onClick={props.fetchActivity}>Become Unbored</button>
            {props.isLoading && (
                 <Loader
                 type="Puff"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 
         
              />
            )}

        </div>
    );
};


const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        activity: state.activity,
        error: state.error
    }
}


export default connect(mapStateToProps,{fetchActivity})(Activity);