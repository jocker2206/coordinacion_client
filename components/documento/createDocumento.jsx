import React, { Component } from 'react';
import Modal from '../modal';
import { Card } from 'react-bootstrap';


export default class CreateDocumento extends Component
{


    state = {
        cod_alumno: "",
        type_request_id: "",
        type_documento_id: "",
        observacion: "",
        monto: 0
    };


    handleInput = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value }); 
    }


    handleCodAlumno = (e) => {
        let { value, name } = e.target;
        if (value.length <= 10) {
            let regex = /^[0-9]+$/
            if (regex.test(value) || value == "") {
                this.setState({ [name]: value });
            }
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
                        <select name="type_documento_id" 
                            className="form-control"
                            value={state.type_documento_id}
                            onChange={this.handleInput}
                        >
                            <option value="">Select. Tip. Documento</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <b>Tip. Solicitud</b>
                        <select name="type_request_id" 
                            className="form-control"
                            value={state.type_request_id}
                            onChange={this.handleInput}
                        >
                            <option value="">Select. Tip. Solicitud</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4">
                                <b>Codigo de Estudiante</b>
                                <input type="text" 
                                    className="form-control"
                                    name="cod_alumno"
                                    value={state.cod_alumno}
                                    onChange={this.handleCodAlumno}
                                />
                            </div>
                            <div className="col-md-8">
                                <b>Nombre Completo</b>
                                <input type="text" 
                                    className="form-control"
                                    disabled={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <b>N° Recibo</b>
                        <input type="text" 
                            className="form-control"
                            name="cod_alumno"
                            value={state.numero_recibo}
                        />
                    </div>

                    <div className="form-group">
                        <b>Monto</b>
                        <input type="number"
                            step="any" 
                            className="form-control"
                            name="cod_alumno"
                            value={state.monto}
                        />
                    </div>

                    <div className="form-group text-right">
                        <button className="btn btn-primary">
                            <i className="fas fa-save"></i> Guardar
                        </button>
                    </div>
                </Card.Body>
            </Modal>
        );
    }
    
}


