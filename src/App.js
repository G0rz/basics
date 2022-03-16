import './App.css';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import { Item } from './components/Items/Item'

const arr = [
  { id: 12, nombre: "Restaurante3", ventas: 4112, FAlta: " 2004 - 04 - 15T00: 00 " },
  { id: 1, nombre: "Restaurante1", ventas: 150, FAlta: "2004 - 01 - 01T12: 45" },
  { id: 7, nombre: "Bar2", ventas: 3540, FAlta: "2007 - 04 - 15T00: 00" },
  { id: 2, nombre: "Restaurante2", ventas: 200, FAlta: "2004 - 04 - 15T00: 00" },
  { id: 6, nombre: "Bar1", ventas: 1200, FAlta: "2012 - 04 - 15T00: 00 " },
  { id: 3, nombre: "Restaurante3", ventas: 4112, FAlta: "2004 - 04 - 15T16: 15" },
  { id: 4, nombre: "Pasteleria1", ventas: 654, FAlta: "2010 - 04 - 12T00: 00" },
  { id: 5, nombre: "Pasteleria2", ventas: 783, FAlta: "2012 - 04 - 15T00: 00" },
  { id: 10, nombre: "Restaurante2", ventas: 200, FAlta: "2004 - 07 - 15T05: 09" },
  { id: 8, nombre: "Restaurante1", ventas: 150, FAlta: "2004 - 01 - 01T00: 00" },
  { id: 9, nombre: "Bar2", ventas: 3540, FAlta: "2007 - 10 - 15T00: 00" },
  { id: 14, nombre: "Pasteleria2", ventas: 783, FAlta: "2012 - 04 - 15T21: 12 " },
  { id: 11, nombre: "Bar1", ventas: 1200, FAlta: "2012 - 04 - 15T00: 00 " },
  { id: 13, nombre: "Pasteleria1", ventas: 654, FAlta: "2010 - 04 - 15T08: 08" },
];

arr.sort(function (a, b) {
  return a.id - b.id;
});

const arr2 = arr.slice();

const arrGeneral = arr.concat(arr2);

console.log(arrGeneral)

var json = JSON.parse(JSON.stringify(arrGeneral));

var totalVentas = json.reduce((sum, value) => (typeof value.ventas == "number" ? sum + value.ventas : sum), 0);

console.log('Cantidad Total de Ventas:', totalVentas);

let pastelerias = arrGeneral.map(element => {
  if (element.nombre.substr(0, 6) === 'Pastel') {
    return element
  }
});

console.log(pastelerias);

export default function App() {

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>FAlta</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Venta</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrGeneral.map(item => (
                <Item key={item} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <h1>14vo registro:</h1>
          <Table aria-label="simple table2">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>FAlta</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Venta</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Item item={arrGeneral[14]} />
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment >
  );
}