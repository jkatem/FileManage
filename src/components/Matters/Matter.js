import React from 'react';

const Matter = (props) => {
    {console.log("Matter: ", props.matters)}

    return (
        <React.Fragment>
        <h3>Matter.js</h3>

        {/* {console.log(match.params.id)} */}
        {/* {console.log(matters)} */}

        <div>          
            <h6>Case Title: {props.matters.case_title}</h6>
            <h6>Lead Attorney: {props.matters.lead_attorney}</h6>
            <h6>Associate Attorney: {props.matters.associate_attorney}</h6>
            <h6>Client: {props.matters.client}</h6>
            <h6>File Number: {props.matters.file_number}</h6>
            <h6>Case Description: {props.matters.case_description}</h6>
            <h6>Practice Area: {props.matters.practice_area}</h6>
            <h6>Status: {props.matters.status}</h6>
            <h6>Open Date: {props.matters.open_date}</h6>
            <h6>Closed Date: {props.matters.closed_date}</h6>
        </div>  
        </React.Fragment>
    )
}

export default Matter

/*

{matters: Array(0), loading: false, showModal: false}
    loading: false
    matters: Array(0)
        ength: 0
    __proto__: Array(0)
    showModal: false
    __proto__: Object
*/