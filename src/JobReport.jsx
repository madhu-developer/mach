import React, { useState, useEffect } from 'react';
import './JobReport.css';

const columnNames = ["#", "Client", "Project", "Job", "Subjob", "Task", "Team", "Region", "Market", "UOM"];
const url = "https://mocki.io/v1/6291432c-cd2b-465d-9c08-a23aa1d36b3f";

export const JobReport = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const searchClients = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchText(searchTerm);
        const filteredClients = data.filter((eachObj) =>
            eachObj.client.toLowerCase().includes(searchTerm) || eachObj.project.toLowerCase().includes(searchTerm)
        );
        setFilteredData(filteredClients);
    }

    return (
        <div className="jobreport-container">
            <div className="jobreport-heading-section">
                <p className="jobreport-heading">Job Report</p>
            </div>
            <div className="report-options-container">
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
                    {searchText === "" ? (
                        data.map((eachItem) => (
                            <tr key={eachItem.id}>
                                <td>{eachItem.id}</td>
                                <td>{eachItem.client}</td>
                                <td>{eachItem.project}</td>
                                <td>{eachItem.job}</td>
                                <td>{eachItem.SubJob}</td>
                                <td>{eachItem.Task}</td>
                                <td>{eachItem.Team}</td>
                                <td>{eachItem.Region}</td>
                                <td>{eachItem.Market}</td>
                                <td>{eachItem.UOM}</td>
                            </tr>
                        ))
                    ) : (
                        filteredData.map((eachItem) => (
                            <tr key={eachItem.id}>
                                <td>{eachItem.id}</td>
                                <td>{eachItem.client}</td>
                                <td>{eachItem.project}</td>
                                <td>{eachItem.job}</td>
                                <td>{eachItem.SubJob}</td>
                                <td>{eachItem.Task}</td>
                                <td>{eachItem.Team}</td>
                                <td>{eachItem.Region}</td>
                                <td>{eachItem.Market}</td>
                                <td>{eachItem.UOM}</td>
                            </tr>
                        ))
                    )}
                </table>
            </div>
        </div>
    );
};
