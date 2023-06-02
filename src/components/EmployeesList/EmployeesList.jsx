import React, { useState } from 'react';
import './EmployeesList.css';

const EmployeesList = ({ data }) => {

  // console.log(data);

  // eslint-disable-next-line
  const [logout, setLogout] = useState(null);

  const handleLogout = (e) => {
    // console.log(e.view.location);
    const location = e.view.location.reload();
    setLogout(location);
  };

  return (
    <>
      <div className='table-responsive m-lg-auto m-md-auto m-sm-auto row col-lg-11 col-md-11 col-sm-11'>
        <h2 className='text-center text-bg-info p-2 rounded-3 shadow-sm'>Employee List</h2>
        <table className="table table-dark table-striped align-middle">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((user, i) => {
              return (
                <tr className='align-bottom' key={i}>
                  <th scope="row">{i + 1}</th>
                  <td className='align-middle'>{user.name}</td>
                  <td className='align-middle'>{user.age}</td>
                  <td className='align-middle'>{user.gender}</td>
                  <td className='align-middle'>{user.email}</td>
                  <td className='align-middle'>{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-center mb-3'>
        <button className='btn btn-outline-danger' onClick={handleLogout} >Log out</button>
      </div>
    </>
  );
};

export default EmployeesList;