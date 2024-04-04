import React, { useState, useEffect } from "react";
import "./Clients.css";

const url = "https://mocki.io/v1/6463a2ee-c483-41db-b659-aeb92d0a6ea5";

export const Clients = () => {
  const [clientData, setClientData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const columnNames = ["#", "Client", "Phone", "Mail", "Website", "Country"];

  useEffect(() => {
    const fetchedClientData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setClientData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedClientData();
  }, []);

  const searchClients = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
    const filteredClients = clientData.filter(
      (eachObj) =>
        eachObj.client.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredClients);
  };

  return (
    <div className="clients-container">
      <div className="client-heading-section">
        <p className="client-heading">Clients</p>
        <button type="button" className="add-client-button">
          Add Client
        </button>
      </div>
      <div className="client-options-container">
        <div className="buttons">
          <button className="button excel-button">Excel</button>
          <button className="button excel-button">Print</button>
          <button className="button excel-button">Column Visibility</button>
          <button className="button excel-button">Page Length</button>
        </div>
        <div className="search-container">
          <p>Search:</p>
          <input type="text" onChange={searchClients} value={searchText} />
        </div>
      </div>
      <div className="report-table">
        <table style={{ width: "100%" }}>
          <tr className="each-column">
            {columnNames.map((eachCol, index) => (
              <th key={index}>{eachCol}</th>
            ))}
          </tr>
          {searchText === ""
            ? clientData.map((eachClient) => {
                const { id, client, phone, mail, website, country } =
                  eachClient;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{client}</td>
                    <td>{phone}</td>
                    <td>{mail}</td>
                    <td>{website}</td>
                    <td>{country}</td>
                  </tr>
                );
              })
            : filteredData.map((eachClient) => {
                const { id, client, phone, mail, website, country } =
                  eachClient;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{client}</td>
                    <td>{phone}</td>
                    <td>{mail}</td>
                    <td>{website}</td>
                    <td>{country}</td>
                  </tr>
                );
              })}
        </table>
      </div>
    </div>
  );
};
