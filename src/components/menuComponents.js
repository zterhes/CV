import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
text-align:center;
text-decoration:none;
color:white;
width:100%;
`
export default ({ link, children }) => {
    return (
        <StyledLink exact to={link} activeClassName="text-dark bg-white">
            <div>{children}</div>
        </StyledLink>
    );
}