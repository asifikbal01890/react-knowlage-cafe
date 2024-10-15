import React, { useEffect, useState } from 'react';

const HomeRight = ({ saveInfo }) => {
    const [min, setMin] = useState(0)


    useEffect(() => {
        for (const element of saveInfo) {
            setMin(min + parseInt(element?.readTime));
        }
    }, [saveInfo])

    return (
        <div className='w-[411px]'>
            <h1 className=' text-center  rounded-lg text-[#6047EC] text-2xl font-bold border border-[#6047ec] bg-[#6047ec23] py-[21px]'>Spent time on read : {min} min</h1>
            <div className='mt-6 bg-[#1111110D] p-[30px] rounded-lg'>
                <h2 className='text-2xl font-bold mb-4'>Bookmarked Blogs : {saveInfo.length}</h2>
                {
                    saveInfo.map((info, i) => <h2 key={i} className='text-lg font-semibold p-5 rounded-lg bg-[#fff] mb-4'>{info.title}</h2>)
                }
            </div>
        </div>
    );
};

export default HomeRight;