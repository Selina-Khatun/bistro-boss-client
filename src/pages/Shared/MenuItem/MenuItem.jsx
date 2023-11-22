import React from 'react';

const MenuItem = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
        <div  className='flex gap-3 p-4 text-left'>
           <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[100px]' src={image} alt="" /> 
           <div>
            <h3 className='uppercase text-lg'>{name}------------------</h3>
            <p>{recipe}</p>
           </div>
           <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;