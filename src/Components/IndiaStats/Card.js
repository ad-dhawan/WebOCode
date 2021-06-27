import React, { Fragment } from 'react';
import CountUp from 'react-countup';

import './IndiaStats.css'

const Card = ({title,cases,color}) => {
    // console.log(confirmed);
    return (
        <Fragment>
            <div className="col-md-4 mt-5">
                <div className="card" style={{borderBottom: `10px solid ${color}`}}>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text text-center"><CountUp start={0} end={cases} duration={2} seperator=","/></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card
