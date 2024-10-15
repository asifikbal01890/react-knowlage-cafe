import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const HomeLeft = ({setSaveInfo, saveInfo}) => {
    const [cafeDatas, setCafeDatas] = useState([])

    

    useEffect(()=>{
        fetch('cafes.json')
        .then(res=>res.json())
        .then(data=> setCafeDatas(data))
    }, [])
    return (
        <div className='w-[845px]'>
            {
                cafeDatas.map(cafeData => <BlogCard
                key={cafeData.id}
                cafeData={cafeData}
                saveInfo={saveInfo}
                setSaveInfo={setSaveInfo}
                ></BlogCard>)
            }
        </div>
    );
};

export default HomeLeft;