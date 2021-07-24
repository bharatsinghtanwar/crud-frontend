import React from 'react'
import Navbar from '../Navbar'
import {Container} from './Page2Elements'
function index() {
    return (
        <>
            <Navbar />
            <Container>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name </label>
                    <input type="text" class="form-control" id="inputName" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com" />
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" />
                    </div>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </div>
            </Container>
        </>

    )
}

export default index
