import styled from 'styled-components';

export const HeaderBox = styled.nav`
 background-color: thistle;
 display: flex;
 justify-content: space-around;
 padding-right: 100px;
 padding-left: 100px;
 align-self: center;
 text-align: center;
 top: 0;
 z-index : 1;
 position: sticky;
 height : 80px;
 width: 100%;
 justify-self: center;
 justify-items: center;


`

export const Logo = styled.text`
 /* padding-left: 30px; */
 font-size: 1.4rem;
 text-decoration: none;
 align-self: center;
 
 font-weight : bold;
 text-transform: uppercase;
 cursor: pointer;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 `;

export const Btn = styled.button`
 background-color: rgba(255,255,255,0.5);
 outline: none;
 align-self:center;
 font-weight: 500;
 cursor: pointer;
 outline-width: 0;
 padding-left: 30px;
 padding-right: 30px;
 border-radius: 50px;
 border : none;
 height: auto;

 &:hover{
     background-color: rgba(255,255,255,0.8)

 }



`;