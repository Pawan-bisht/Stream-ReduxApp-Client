import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamList from "./streams/StreamList";
import Header from './Header';
export default class App extends React.Component{
    render(){
        return (<div>
            <BrowserRouter>
            <div>
                <Header/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/edit" exact component={StreamEdit}/>
                <Route path="/streams/delete" exact component={StreamDelete}/>
                <Route path="/streams/show" exact component={StreamShow}/>
                <Route path="/" exact component={StreamList}/>
            </div>
            </BrowserRouter>
        </div>)
    }
}