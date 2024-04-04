import React,{useState,useEffect} from 'react';
import './Projects.css';

const url ="https://mocki.io/v1/95aa114b-6433-4bbe-a9ab-b7509bd63852";

export const Projects = () => {

    const [projectData, setProjectData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const columnNames = ["#", "Client", "Project", "Start Date", "Invoice Type", "Files", "Action"];

  useEffect(() => {
    const fetchedProjectData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProjectData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedProjectData();
  }, []);

  useEffect(() => {
        const searchProjects = () => {
            const searchTerm = searchText.toLowerCase();
            const filteredProjects = projectData.filter(
                (eachObj) =>
                    eachObj.client.toLowerCase().includes(searchTerm)
            );
            setFilteredData(filteredProjects);
        };

        searchProjects();
    }, [projectData, searchText]);

  const hideProject = (id) => {
    const newData= projectData.filter(eachProj => eachProj.id !== id);
    setProjectData(newData);
  }

  

  return (
    <div className="projects-container">
            <div className="project-heading-section">
                <p className="project-heading">Projects</p>
                <button type="button" className="add-client-button">
                Add Project
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
                <input type="text" onChange={searchProjects} value={searchText} />
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
                  ? projectData.map((eachClient) => {
                      const { id, client, project, startdate, invoicetype, files} =
                        eachClient;
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{client}</td>
                          <td>{project}</td>
                          <td>{startdate}</td>
                          <td>{invoicetype}</td>
                          <td>{files}</td>
                          <td onClick={()=>hideProject(id)}><button>Hide</button></td>
                          </tr>
                      );
                    })
                  : filteredData.map((eachClient) => {
                    const { id, client, project, startdate, invoicetype, files } =
                    eachClient;
                      return (
                        <tr key={id}>
                        <td>{id}</td>
                        <td>{client}</td>
                        <td>{project}</td>
                        <td>{startdate}</td>
                        <td>{invoicetype}</td>
                        <td>{files}</td>
                        <td onClick={hideProject}><button>Hide</button></td>
                        </tr>
                      );
                    })}
              </table>
            </div>
          </div>
        );
      };
      
