import React from 'react';

const SectionTitle = ({heading,subHeading,className}) => {
    return (
        <div className=' w-3/12 mx-auto my-10'>
          <p className='text-[#D99904] p-1'>--- <i>{subHeading}</i>  ---</p> 
          <h2 className={` border-y-2 text-2xl font-medium p-2 ${className}`}>{heading}</h2>
        </div>
    );
};

export default SectionTitle;