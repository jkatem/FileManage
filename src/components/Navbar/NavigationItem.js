import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledNavItem = styled.div`
height: 70px;
width: 65px; 
text-align: center; 
margin-bottom: 0;   
a {
    font-size: 1.5em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
        opacity: 0.7;
        text-decoration: none; /* Gets rid of underlining of icons */
    }  
}
`;

const NavIcon = styled.div`
`;

class NavigationItem extends React.Component {

    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

export default NavigationItem