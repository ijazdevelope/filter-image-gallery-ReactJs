import React from 'react'
import { ColorRing } from 'react-loader-spinner';
import loader from './loader.scss';

const Loader = () => {
    return (
        <div className='loader-spiiner'>
            <ColorRing
                visible={true}
                height="200"
                width="200"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )
}

export default Loader
