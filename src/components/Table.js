import React from 'react'
import '../css/Table.css';
import DataTable from 'react-data-table-component';
export default function Table(props) {
   
    const colums = [
        {
            name: "Sno",
            selector: (row) => <b>{row.key}</b>,
            sortable:true,

        },
        {
            name: "First Name",
            selector: (row) => row.firstName,
            sortable:true,

        },
        {
            name: "Last Name",
            selector: (row) => row.lastName,
            sortable:true,
        },
        {
            name: "Age",
            selector: (row) => row.age,
            sortable:true,
        },
        {
            name: "Status",
            selector: (row) => <span className={`fw-bold ${row.status ? "text-success" : "text-danger"}`}>{row.status ? "Success" : "Fail"}</span>,
        },

    ]

    return (

        <>
            <DataTable
                columns={colums}
                data={props.userArr}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='500px'
                selectableRows
                selectableRowsHighlight
            />

        </>
    )
}
