import React, { Component } from 'react';
import {  Field, reduxForm, reset } from "redux-form";
import { Button, Input, Label, Form, Modal, Message, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';

class StreamCreate extends Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            open:false
        }
    }
    
    renderError = ({ touched, error}) =>{
        console.log(error, touched);
        if(touched && error)
        {
            return (<Message error content={error} />);
        }
    }

    renderInput = (formProps) => {
        const classNames = `${formProps.meta.error && formProps.meta.touched ? 'error':'' }`;
        // console.log(className);
        console.log(formProps.meta);
        return (<Form.Field className={classNames}>
            <Label>{formProps.label}</Label>
            <Input {...formProps.input} placeholder={formProps.placeholder}/>
            {this.renderError(formProps.meta)}
            </Form.Field>);
    }

    onSubmit = (formsValues) =>{
        this.props.createStream(formsValues);
    }

    render()
    {   const { handleSubmit, submitting, resetForm } = this.props;
    console.log(this.props);
        return (
            // <Modal
            // open={this.state.open}
            // trigger={<Button>Create Stream</Button>}
            // onOpen={() => this.setState({ open:true})}
            // onClose={() => this.setState({ open:false})}
            // >
                <Container>
                <br/>
                <Form error onSubmit={handleSubmit(this.onSubmit)} >
                    <Field name="title" component={this.renderInput} placeholder="Title" label="Enter title"/>
                    <Field name="description" component={this.renderInput} placeholder="Description" label="Enter description" />
                    
                    <Button positive floated="right" type="submit" disabled={submitting}>Submit</Button>
                    {/* <Button floated="right" type="button" onClick={()=>{ this.setState({ open:false})}}>Cancel</Button> */}
                    
                </Form>
                <br/>
                </Container>
            // </Modal>
                )
    }
}

const validate = formValues =>{
    console.log(formValues);
    console.log("Validation");
    const error = {};
    if(!formValues.title)
    {
        error.title = "You must enter a title";
    }
    if(!formValues.description)
    {
        error.description = "You must enter a description";
    }
    return error;
}

const fromWrapped = reduxForm({ form: "streamCreate", validate})(StreamCreate);

const mapStateToProps = (state) =>{

}

export default connect(mapStateToProps, { createStream })(fromWrapped);