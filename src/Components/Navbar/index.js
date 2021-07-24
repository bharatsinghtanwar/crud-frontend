import React from 'react'
import { HeaderBox,  Logo, Btn } from './NavbarElements'
function index() {
    return (
        <>
            <HeaderBox>

                <Logo>
                    User Management System
                </Logo>
                <Btn class='' to='/page2'>
                    Add User
                </Btn>


            </HeaderBox>
        </>
    )
}

export default index
