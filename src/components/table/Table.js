import React, { useEffect, useState } from 'react';
import './Table.css';
import Loader from '../loader-spinner/Loader';
import TablelAvatar from './TablelAvatar';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Table = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [skeleton, setSkeleton] = useState(false);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(err => console.error(err, 'Error occured while fetching users'));
        setLoader(false)
    }, []);

    return (
        <>
            <table>
                <caption>API Sample Data</caption>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {loader && <> <Loader /></>}
                    {data?.map((item, i) => (
                        <tr key={Math.random().toString()}>
                            {skeleton ?
                                <p className='c-product__skeleton'>
                                    <Skeleton count={3} />
                                </p>
                                :
                                <td style={{ fontWeight: 'bold' }}> {++i} </td>
                            }
                            <td data-label={item.first_name}>{item.first_name}</td>
                            <td data-label={item.last_name}>{item.last_name}</td>
                            <td data-label={item.email}>{item.email}</td>
                            <td data-label="Period">
                                <TablelAvatar src={item.avatar} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table
