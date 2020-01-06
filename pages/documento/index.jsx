import React, { Component } from 'react';
import DataTable from '../../components/datatable';
import Router from 'next/router';
import CreateDocumento from '../../components/documento/createDocumento';


export default class Index extends Component
{

    static getInitialProps = ({ query, pathname }) => {
        return { query, pathname }
    }


    render() {

        let { pathname, query } = this.props;

        return (
            <div>   
                <DataTable
                    titulo={`Registro de Constancias e Informes Académicos`}
                    headers={["#ID", "N° Documento", "Tip. Solicitud", "Tip. Documento", "Cod. Estudiante", "Estado"]}
                >
                    <button className="btn btn-primary"
                        onClick={(e) => {
                            query.create = "true";
                            Router.push({ pathname, query })
                        }}
                    >
                        <i className="fas fa-plus"></i> Nuevo Documento
                    </button>
                </DataTable>
                <CreateDocumento 
                    show={query && query.create}
                    isClose={(e) => {
                        query.create = "";
                        Router.push({ pathname, query })
                    }}
                />
            </div>
        )
    }

}