import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        const getData = async () => {
            await axios
                .get('http://localhost:5000/hotel/user')
                .then((res) => setUsers(res.data.data))
                .catch((err) => {
                    console.log(err);
                });
        };

        Promise.all([getData()]);
    }, []);
    const badgeColor = (role: string) => {
        switch (role) {
            case 'admin':
                return (
                    <p className="bg-red-500 px-2 py-0.5 rounded-xl text-white whitespace-no-wrap">
                        Admin
                    </p>
                );
            default:
                return (
                    <p className="bg-yellow-500 px-2 py-0.5 rounded-xl text-white whitespace-no-wrap">
                        Resepsionis
                    </p>
                );
        }
    };

    const handleDelete = async () => {
        await axios.delete
    }

    return (
        <section>
            <table className='w-full table-auto '>
                <thead className='bg-gray-400 text-bold text-center text-white'>
                    <tr>
                        <td>
                            NO.
                        </td>
                        <td>
                            Nama
                        </td>
                        <td>
                            Email
                        </td>
                        <td>
                            Foto
                        </td>
                        <td>
                            Role
                        </td>
                    </tr>
                </thead>
            </table>
        </section>
    )



}
export default UserList;

