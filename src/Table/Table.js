import React from 'react';

export default props => (
  <table className="table" style={{ cursor: "pointer" }}>

    <thead>
      <tr>
        <th>
          Дата
        </th>
        <th onClick={props.onSort.bind(null, "title")}>
          Название{" "}
          {props.sortField === "title" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "quantity")}>
          Количество{" "}
          {props.sortField === "quantity" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "distance")}>
          Расстояние{" "}
          {props.sortField === "distance" ? <small>{props.sort}</small> : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr
          key={item.date}
          onClick={props.onRowSelect.bind(null, item)}
        >
          <td>{item.date}</td>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>{item.distance}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
