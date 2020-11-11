import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { Button, Input, Label, Form, Modal } from 'semantic-ui-react'
class StreamCreate extends Component{
    
    constructor(props)
    {
        super(props);
        this.state={
            open:false
        }
    }
    
    renderInput(formProps)
    {
        return (<Form.Field> 
            <Label>{formProps.label}</Label>
            <Input {...formProps.input} placeholder={formProps.placeholder}/>
            </Form.Field>);
    }
    render()
    {
        return (
            <Modal 
            open={this.state.open} 
            trigger={<Button>Show Modal</Button>}
            onOpen={() => this.setState({ open:true})}
            onClose={() => this.setState({ open:false})}
            >
                <Form>
                    <Field name="title" component={this.renderInput} placeholder="Title" label="Enter title"/>
                    <Field name="description" component={this.renderInput} placeholder="Description" label="Enter description" />
                </Form>


                
                </Modal>
                )
    }
}

export default reduxForm({ form: "streamCreate"})(StreamCreate);