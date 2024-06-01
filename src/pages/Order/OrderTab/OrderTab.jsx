import React from 'react';
import FoodCard from '../../Shared/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 my-10'>
           {
            items.map(item=><FoodCard 
            key={item._id}
            item={item}
            ></FoodCard>)
           } 
        </div>
    );
};

export default OrderTab;