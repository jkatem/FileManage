import React from 'react';
import NavigationItem from './NavigationItem'


const NavItems = (props) => {

    const items = [ 
        {
          path: '/', /* path is used as id to check which NavItem is active basically */
          name: 'Dashboard',
          css: 'fa fa-fw fa-home' ,
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
        },
        {
          path: '/matters',
          name: 'Matter',
          css: 'fa fa-fw fa-briefcase',
          key: 2
        },
        {
          path: '/tasks',
          name: 'Tasks',
          css: 'fas fa-list',
          key: 3
        }
    ]
 
        return (
            items.map((item => {
                
                <NavigationItem 
                    path={item.path}
                    name={item.name}
                    css={item.css}
                    onItemClick={props.onItemClick}
                    key={item.key}
                />
            }))
            
            
        )
}

export default NavItems