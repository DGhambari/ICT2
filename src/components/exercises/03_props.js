import React from 'react';

const Demo = (props) => {
  return (
    <>
      <h1>{`${props.course}  - Modules table`}</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.modules[0].name}</td>
            <td>{props.modules[0].noLectures}</td>
            <td>{props.modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{props.modules[1].name}</td>
            <td>{props.modules[1].noLectures}</td>
            <td>{props.modules[1].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Demo;
