import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import './style.css';

class TourlaneTable extends Component {
	render() {
		const { data } = this.props;

		return (
			<div className='table-root'>
				<Paper>
					<Table>
				        <TableHead>
				          <TableRow>
				            <TableCell>Name</TableCell>
				            <TableCell>Phone number</TableCell>
				            <TableCell>Destination</TableCell>
				            <TableCell>Created at</TableCell>
				          </TableRow>
				        </TableHead>
				        <TableBody>
				          {data.map((row, index) => {
				          	const phone = row.Phone.replace(/-/g, '')
				            return (
				              <TableRow key={index}>
				                <TableCell component="th" scope="row">
				                  {row.Name}
				                </TableCell>
				                <TableCell><a href={`tel:${phone}`}>{phone}</a></TableCell>
				                <TableCell>{row.Destination}</TableCell>
				                <TableCell>{moment(row.CreatedAt).fromNow()}</TableCell>
				              </TableRow>
				            );
				          })}
				        </TableBody>
		      		</Table>
		      	</Paper>
	      	</div>
		);
	}
}

export default TourlaneTable;