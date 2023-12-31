import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
const [menu]=useMenu();
const popular=menu.filter(item=>item.category==='popular');

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems);
    //         });

    // }, []);
    return (
        <section>
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className='grid grid-cols-2'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className=' my-5'>
                <button className='btn marker: btn-outline btn-ghost border-0 border-b-2 border-black text-black uppercase my-2'>View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;