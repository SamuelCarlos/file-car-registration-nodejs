import React, { useState, useEffect } from "react";
import "./View.css";
import api from "../api";

const View = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState();

  const loadData = async () => {
    const request = await api.get("/cars");
    setData(request.data.values);
    setTable(
      request.data.values.map((items, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            {items
              .slice(1, 5)

              .map((item, index) => {
                return <td>{item}</td>;
              })}
            <td>
              <button
                onClick={() => {
                  console.log(items[0]);
                  deleteItem(items[0]);
                }}
              >
                X <i class="cis-trash"></i>
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteItem = async (uuid) => {
    const response = await api.delete(`/cars/${uuid}`);
    loadData();
    return response;
  };

  if (!data.length) {
    return <h3>There is no data.</h3>;
  } else {
    return (
      <div className="tableMain">
        <table>
          <tr>
            <th>#</th>
            <th>Tag</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Registration day</th>
            <th>Delete</th>
          </tr>
          {table}
        </table>
      </div>
    );
  }
};

export default View;
