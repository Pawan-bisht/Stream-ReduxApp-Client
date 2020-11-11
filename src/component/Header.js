import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth  from './GoogleAuth';
import { Menu } from 'semantic-ui-react';
export default class Headers extends Component{
    render()
    {
        return(
            <Menu pointing>
                <Menu.Item>
                    <Link to="/">Streamer</Link>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                    <Link to="/" >
                     All streams
                     </Link> 
                    </Menu.Item>
                </Menu.Menu>
                <GoogleAuth />
            </Menu>
            // <div className="ui secondary pointing menu">
            //     <Link to="/" className="item">
            //         Streamer
            //     </Link>
            //     <div className="right menu">
            //     <Link to="/" className="item">
            //         All streams
            //     </Link>
            //     <GoogleAuth />
            //     </div>
            // </div>
        );
    }
}