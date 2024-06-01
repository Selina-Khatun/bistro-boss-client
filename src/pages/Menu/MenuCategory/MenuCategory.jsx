import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover title={title} img={img}></Cover>}
            <div className='grid grid-cols-2'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className=' my-5 mb-10'>
                <Link to={`/order/${title ||'salad'}`}><button className='btn marker: btn-outline btn-ghost border-0 border-b-2 border-black text-black uppercase my-2'>ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;