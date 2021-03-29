import React from 'react';
import {StyledLink} from '../components/styleComponents/styleHolder'


export default ({ link, children }) => {
    return (
        <StyledLink exact to={link} activeClassName="text-dark bg-white">
            <div>{children}</div>
        </StyledLink>
    );
}