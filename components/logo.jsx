import React, { Component } from 'react';

export default class Logo extends Component
{

    render() {
        return (
            <h3 className="text-center">
                <img src="/static/img/logo-unu.png" 
                    alt="logo"
                    style={{ 
                        width: "35px",
                        marginRight: "0.3em",
                        borderRadius: "50%"
                     }}
                />
                UNU
            </h3>
        );
    }

}