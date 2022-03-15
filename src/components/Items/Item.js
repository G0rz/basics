import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export function Item(props) {

    const total = props.item.ventas * 12.57;

    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
    });

    return (

        <TableRow>
            <TableCell component="th" scope="row">
                {props.item.id}
            </TableCell>
            <TableCell component="th" scope="row">
                {props.item.FAlta.toLocaleString("en-US")}
            </TableCell>
            <TableCell component="th" scope="row">
                {props.item.nombre}
            </TableCell>
            <TableCell component="th" scope="row">
                {props.item.ventas}
            </TableCell>
            <TableCell component="th" scope="row">
                {formatter.format(total)}
            </TableCell>
        </TableRow>
    );
}