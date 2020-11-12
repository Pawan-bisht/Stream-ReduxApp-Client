import React, { Component } from 'react';
import {  Field, reduxForm } from "redux-form";
import { Button, Input, Label, Form, Modal, Message } from 'semantic-ui-react';

class StreamCreate extends Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            open:false
        }
    }
    
    renderError = ({ touched, error}) =>{
        console.log(error);
        if(touched && error)
        {
            return (<Message error content={error} />);
        }
        
    }

    renderInput = (formProps) => {
        
        const className = `${formProps.meta.error && formProps.meta.touched ? 'error':"" }`;
        console.log(className);
        return (<Form.Field className={className}> 
            <Label>{formProps.label}</Label>
            <Input {...formProps.input} placeholder={formProps.placeholder}/>
            {this.renderError(formProps.meta)}
            </Form.Field>);
    }

    onSubmit = (formsValue) =>{
        console.log(formsValue);
    }

    render()
    {   const { handleSubmit, submitting } = this.props;
        return (
            <Modal
            open={this.state.open} 
            trigger={<Button>Create Stream</Button>}
            onOpen={() => this.setState({ open:true})}
            onClose={() => this.setState({ open:false})}
            >
                <Form error onSubmit={handleSubmit(this.onSubmit)} >
                    <Field name="title" component={this.renderInput} placeholder="Title" label="Enter title"/>
                    <Field name="description" component={this.renderInput} placeholder="Description" label="Enter description" />
                    <Modal.Actions >
                    <Button positive floated="right" type="submit" disabled={submitting}>Submit</Button>
                    <Button floated="right" onClick={()=>this.setState({ open:false})}>Cancel</Button>
                    </Modal.Actions>
                </Form>
                <br/>
                <br/>
            </Modal>
                )
    }
}

const validate = formValues =>{

    const errors = {};
    if(!formValues.title)
    {
        errors.title = "You must enter a title";
    }
    if(!formValues.description)
    {
        errors.description = "You must enter a description";
    }
    return errors;
}

export default reduxForm({ form: "streamCreate", validate})(StreamCreate);