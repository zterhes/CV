import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const Component = styled.div`
display:flex;
color:white;
justify-content:center;
align-items:center;
`

export default ({ link, children }) => {
    return (
            <Link to={link}>
                <Component>
                    <p>{children}</p>
                </Component>
            </Link>
    );
}