import React, { Component } from 'react';
import Modal from '../modal';
import { Card } from 'react-bootstrap';


export default class CreateDocumento extends Component
{


    state = {
        cod_alumno: ""
    };


    handleCodAlumno = (e) => {
        let { value, name } = e.target;
        if (value.length <= 10 && typeof value == "number") {
            this.setState({ [name]: value });
        }
    }


    render() {

        let { state, props } = this;

        return (
            <Modal {...this.props} 
                titulo="Crear nuevo documento de Constancia e Informe Académico"
            >
                <Card.Body>
                    <div className="form-group">
                        <b>N° de Documento</b>
                        <input type="text" 
                            placeholder="Autogenerado" 
                            className="form-control"
                            disabled={true}
                        />
                    </div>

                    <div className="form-group">
                        <b>Tip. Documento</b>
                        <select name="" 
                            className="form-control"
                        >
                            <option value="">Select. Tip. Documento</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <b>Tip. Solicitud</b>
                        <select name="" 
                            className="form-control"
                        >
                            <option value="">Select. Tip. Solicitud</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <b>Codigo de Estudiante</b>
                        <input type="text" 
                            className="form-control"
                            name="cod_alumno"
                            value={state.cod_alumno}
                            onChange={this.handleCodAlumno}
                        />
                    </div>
                </Card.Body>
            </Modal>
        );
    }
    
}


