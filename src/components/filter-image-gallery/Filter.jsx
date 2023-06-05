import React, { useEffect, useState } from 'react';
import './gallery.css';
import Menu from './Mesu';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Filter = () => {

    const [food, setFood] = useState(Menu);
    const [classValue, setClassValue] = useState('all');
    const [skeleton, setSkeleton] = useState(true);

    const foodValues = (foodName, event) => {
        let elemClassName = event?.target.innerText;
        console.log(elemClassName === event?.target.innerText);

        const filterdItems = Menu.filter(item => {
            return item.category === foodName;
        });
        setFood(filterdItems);
    }

    useEffect(() => {
        setTimeout(() => {
            setSkeleton(false);
        }, 2000);
    }, [])

    return (
        <>
            <h2 className='filter'>filter image gallery</h2>
            <div className='gallery_container'>
                <div className="gallery_container__wrapper">
                    <button className={`${classValue === 'fish' ? 'fish gallery_container__button' : 'gallery_container__button'}`} onClick={(e) => { foodValues('fish', e); setClassValue('fish') }}>Fish</button>
                    <button className={`${classValue === 'rice' ? 'rice gallery_container__button' : 'gallery_container__button'}`} onClick={(e) => { foodValues('rice', e); setClassValue('rice') }}>Rice</button>
                    <button className={`${classValue === 'salad' ? 'salad gallery_container__button' : 'gallery_container__button'}`} onClick={(e) => { foodValues('salad', e); setClassValue('salad') }}>Salad</button>
                    <button className={`${classValue === 'bread' ? 'bread gallery_container__button' : 'gallery_container__button'}`} onClick={(e) => { foodValues('bread', e); setClassValue('bread') }}>Bread</button>
                    <button className={`${classValue === 'all' ? 'all gallery_container__button' : 'gallery_container__button'}`} onClick={(e) => { setFood(Menu, e); setClassValue('all') }}>All</button>
                </div>

                <div className="gallery_container__card__wrapper">
                    {food?.map((elements, index) => {
                        const { name, image, price } = elements;
                        return (
                            <div className="gallery_container__card" key={index}>
                                <div className="card-header">
                                    {/* <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                        <Skeleton count={5} />
                                    </SkeletonTheme> */}
                                    {skeleton ?
                                        <SkeletonTheme baseColor="" highlightColor="#444">
                                            <Skeleton count={5} />
                                        </SkeletonTheme> :
                                        <img className='gallery_container__card__image' src={image} alt={image} />
                                    }
                                    <div className="gallery_container__card-body">
                                        {skeleton ?
                                            <Skeleton count={1} />
                                            :
                                            <h3>{name}</h3>
                                        }
                                        {skeleton ?
                                            <Skeleton count={1} />
                                            :
                                            <div className='gallery_container__ratings'>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                                <i className="fa fa-sstar-o" aria-hidden="true"></i>
                                            </div>
                                        }
                                        {skeleton ?
                                            <Skeleton count={2} />
                                            :
                                            <>
                                                <p className="gallery_container__price">{price}</p>
                                                <span className="gallery_container__badge">
                                                    GOLD
                                                </span>
                                            </>
                                        }

                                        <div className="product--tile__member gallery_container__member">
                                            {skeleton ?
                                                <Skeleton width={137} height={21} count={1} />
                                                :
                                                <span className="product--tile__member__msg">
                                                    members pay $3.25
                                                </span>
                                            }


                                            <div className="gallery_container__actions">
                                                {skeleton ?
                                                    <Skeleton width={38} height={26} count={1} />
                                                    :
                                                    <a className="gallery_container__search" href="#">
                                                        <i className="fa fa-search"></i></a>
                                                }
                                                {skeleton ?
                                                    <Skeleton width={38} height={26} count={1} />
                                                    :
                                                    <a href="#" className="gallery_container__search">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Filter;