import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const Component = styled.div`
display:flex;
color:white;
justify-content:center;
align-items:center;
`

const StyledLink=styled(Link)`
color: white;
text-decoration:none;
`
export default ({ link, children }) => {
    return (
            <StyledLink to={link}>
                <Component>
                    <p>{children}</p>
                </Component>
            </StyledLink>
    );
}