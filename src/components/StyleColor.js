import React from 'react'
import'./StyleColor.css';

const StyleColor = ({ data, ts, ln }) => {

    console.log(data);
    console.log(ts);
    console.log(ln);

    // let response = "";
    // let b = false;
    // if (b) {
    //     response = (
    //         <div>
    //             <h1>The Final Response is ...</h1>
    //             <div>The value is true</div>
    //         </div>
    //     )
    // } else {
    //     response = (
    //         <>
    //             <h1>The Final Response is ...</h1>
    //             <div>The value is False</div>
    //         </>
    //     )
    // }

    return (
        <div className="rainbow">
            <div>
                <h1>Label Component</h1>
                {data.map((x)=>{
                    return(
                        <div>
                            <h3>{x.fname}   {x.lname}</h3>
                        </div>
                    );
                })}
                <h5>Date: {ts}</h5>
            </div>
            <h8>From -App Component</h8>
        </div>
    );
};
export default StyleColor;

