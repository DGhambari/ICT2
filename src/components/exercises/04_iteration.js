import React from 'react';

const Demo = (props) => {
  const list = props.modules.map((module, index) => (
    <tr key={index}>
      <td>{module.name}</td>
      <td>{module.noLectures}</td>
      <td>{module.noPracticals}</td>
    </tr>
  ));

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
        <tbody>{list}</tbody>
      </table>
    </>
  );
};

export default Demo;
