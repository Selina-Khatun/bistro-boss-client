import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';

const Menu = () => {
    return (
        <div>
          

            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover title={'our menu'} img={menuImg}></Cover>
        </div>
    );
};

export default Menu;