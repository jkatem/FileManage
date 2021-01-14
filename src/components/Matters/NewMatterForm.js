import React, { Component } from 'react'

class NewMatterForm extends Component {
 
    render() {
        return (
            <div>
                <h2>New Matter:</h2>
          
                <label>Case Title:</label><br />
                <input name="title" type="text" value={this.props.title} onChange={this.handleOnChange} placeholder="required" required />
                <br />
                <label>Lead Attorney:</label><br />
                <input name="lead_attorney" type="text" value={this.props.lead_attorney} onChange={this.handleOnChange} placeholder="required" required />
                <br />
                <label>Associate Attorney:</label><br />
                <input name="associate_attorney" type="text" value={this.props.associate_attorney} onChange={this.handleOnChange} placeholder="required" required />
                <br /> 
                <label>Client:</label><br />
                <input name="client" type="text" value={this.props.client} onChange={this.handleOnChange} placeholder="required" required />
                <br /> 
                <label>File Number:</label><br /> 
                <input name="file_number" type="text" value={this.props.file_number} onChange={this.handleOnChange} placeholder="required" required />
                <br />
            
                <label>Case Description:</label><br />
                <textarea name="case_description" type="text" value={this.props.case_description} onChange={this.handleOnChange} placeholder="required" required />
                <br />
                <label>Practice Area:</label><br />
                <input name="practice_area" type="text" value={this.props.practice_area} onChange={this.handleOnChange} placeholder="required" required />
                <br />
                <label>Status:</label><br />
                <input name="status" type="text" value={this.props.status} onChange={this.handleOnChange} placeholder="required" required />
                <br />
                <label>Date Opened:</label><br />
                <input name="open_date" type="text" value={this.props.open_date} onChange={this.handleOnChange} placeholder="required" required />
                <br />
                <label>Date Closed:</label><br />
                <input name="closed_date" type="text" value={this.props.closed_date} onChange={this.handleOnChange} placeholder="required" required />
                <br />
                <br />
         
                
            </div>
        )
    }
}

export default NewMatterForm;