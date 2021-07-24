import React from "react";
import { Container, Row, Form, FormGroup, FormControl, FormLabel, Button, Alert, Table } from "react-bootstrap";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
      phone: "",
			records: [],
			showAlert: false,
			alertMsg: "",
			alertType: "success",
			Id: "",
			update: false,
		};
	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	componentWillMount() {
		this.fetchAllRecords();
	}

	// add a record
	addRecord = () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var body = JSON.stringify({ name: this.state.name, email: this.state.email,  phone: this.state.phone });
		fetch("http://localhost:8000/api/create", {
			method: "POST",
			headers: myHeaders,
			body: body,
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				this.setState({
					name: "",
					email: "",
          phone:"",
					showAlert: true,
					alertMsg: result.response,
					alertType: "success",
				});
			});
	};

	// fetch All Records
	fetchAllRecords = () => {
		var headers = new Headers();
		headers.append("Content-Type", "application/json");
		fetch("http://localhost:8000/api/view", {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((result) => {
				console.log("result", result);
				this.setState({
					records: result.response,
				});
			})
			.catch((error) => console.log("error", error));
	};

	// view single data to edit
	editRecord = (Id) => {
		fetch("http://localhost:8000/api/view/" + Id, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				this.setState({
					Id: Id,
					update: true,
					name: result.response[0].name,
					email: result.response[0].email,
          phone: result.response[0].phone,
				});
			})
			.catch((error) => console.log("error", error));
	};

	// update record
	updateRecord = () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var body = JSON.stringify({ Id: this.state.Id, name: this.state.name, email: this.state.email, phone: this.state.phone });
		fetch("http://localhost:8000/api/update", {
			method: "PUT",
			headers: myHeaders,
			body: body,
		})
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					showAlert: true,
					alertMsg: result.response,
					alertType: "success",
					update: false,
					Id: "",
					name: "",
					email: "",
          phone:"",
				});
				this.fetchAllRecords();
			})
			.catch((error) => console.log("error", error));
	};

	// delete a record
	deleteRecord = (Id) => {
		fetch("http://localhost:8000/api/delete/" + Id, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					showAlert: true,
					alertMsg: result.response,
					alertType: "danger",
				});
				this.fetchAllRecords();
			})
			.catch((error) => console.log("error", error));
	};
	render() {
		return (
			<div>
				<Container>
					{this.state.showAlert === true ? (
						<Alert
							variant={this.state.alertType}
							onClose={() => {
								this.setState({
									showAlert: false,
								});
							}}
							dismissible
						>
							<Alert.Heading>{this.state.alertMsg}</Alert.Heading>
						</Alert>
					) : null}

					{/* All Records */}
					<Row>
						<Table striped bordered hover size="sm">
							<thead>
								<tr>
									<th>Id</th>
									<th>Name</th>
									<th>Email</th>
                  <th>Phone No</th>
									<th colSpan="2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{this.state.records.map((record) => {
									return (
										<tr>
											<td>{record.Id}</td>
											<td>{record.name}</td>
											<td>{record.email}</td>
                      <td>{record.phone}</td>
											<td>
												<Button variant="info" onClick={() => this.editRecord(record.Id)}>
													Edit
												</Button>
											</td>
											<td>
												<Button variant="danger" onClick={() => this.deleteRecord(record.Id)}>
													Delete
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</Row>

					{/* Insert Form */}
					<Row>
						<Form>
							<FormGroup>
								<FormLabel>Enter the name</FormLabel>
								<FormControl type="text" name="name" placeholder="Enter the name" onChange={this.handleChange} value={this.state.name}></FormControl>
							</FormGroup>
							<FormGroup>
								<FormLabel>Enter the email</FormLabel>
								<FormControl type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter the email"></FormControl>
							</FormGroup>
              <FormGroup>
								<FormLabel>Enter the email</FormLabel>
								<FormControl type="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Enter the phone"></FormControl>
							</FormGroup>

							{this.state.update === true ? <Button onClick={this.updateRecord}>update</Button> : <Button onClick={this.addRecord}>Save</Button>}
						</Form>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;