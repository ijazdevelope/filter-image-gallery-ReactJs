import React, { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TablelAvatar = ({src}) => {

    const [skeleton, setSkeleton] = useState(false);


    return (
        <>
            {!skeleton &&
                <p className='c-product__skeleton'>
                    <Skeleton count={3} />
                </p>
            }
            <img onLoad={() => setSkeleton(true)} src={src} alt="table-avatar" />
        </>
    )
}

export default TablelAvatar
