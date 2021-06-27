import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import Slide from 'react-reveal/Slide'

import './IndiaStats.css'

const Card = ({title,cases,color}) => {
    // console.log(confirmed);
    return (
        <Fragment>
            <Slide bottom>

            <div className="col-md-4 mt-5">
                <div className="card" style={{borderBottom: `10px solid ${color}`}}>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text text-center"><CountUp start={0} end={cases} duration={2} seperator=","/></p>
                    </div>
                </div>
            </div>
            </Slide>
        </Fragment>
    )
}

export default Card
