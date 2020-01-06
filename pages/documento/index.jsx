import React, { Component } from 'react';
import DataTable from '../../components/datatable';


export default class Index extends Component
{

    static getInititalProps = (props) => {
        return { query: props.query }
    }

    render() {
        return (
            <div>   
                <DataTable
                    titulo={`Registro de Constancias e Informes Académicos`}
                    headers={["#ID", "N° Documento", "Tip. Solicitud", "Tip. Documento", "Cod. Alumno", "Estado"]}
                >
                    <button className="btn btn-primary">
                        <i className="fas fa-plus"></i> Nuevo Documento
                    </button>
                </DataTable>
            </div>
        )
    }

}