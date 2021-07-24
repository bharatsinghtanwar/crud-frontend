import styled from 'styled-components';
import {FaUserEdit, FaTrashAlt, FaUsers} from 'react-icons/fa'



export const Container = styled.div`
 width: 60%;
 justify-content: center;
 margin-left: auto;
 margin-right: auto;
 margin-top: 100px;
 
`
export const IconEdit = styled(FaUserEdit)`
 cursor: pointer;
 height: 20px;
 width: 20px;
 color: green;
`;
export const IconDel = styled(FaTrashAlt)`
 cursor: pointer;
 color: red;
`;
export const IconView = styled(FaUsers)`
 cursor: pointer;
 height: 20px;
 width: 20px;
 color: blue;
`;