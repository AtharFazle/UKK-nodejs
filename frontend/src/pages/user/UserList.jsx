import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);



  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:5000/hotel/user");
    setUsers(response.data);
    console.log(response.data);
  };
  return (
    <table className=" flex-justify-center min-w-auto h-auto border-collapse block md:table ">
      <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            No.
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Nama
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Foto
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Email
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
            
          <tr key={user.id}>
            <td className="bg-gray-300 p-2 text-white font-bold md:border md:border-grey-300 text-left block md:table-cell">
              {index+1}
            </td>
            <td className="bg-gray-300 p-2 text-white font-bold md:border md:border-grey-300 text-left block md:table-cell">
              {user.nama_user}
            </td>
            <td className="bg-gray-300 p-2 text-white font-bold md:border md:border-grey-300 text-left block md:table-cell">
            {user.foto}
            </td>
            <td className="bg-gray-300 p-2 text-white font-bold md:border md:border-grey-300 text-left block md:table-cell">
            {user.email}
            </td>
            <td className="bg-gray-300 p-2 text-white font-bold md:border md:border-grey-300 text-left block md:table-cell">
            {user.role}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UserList;
