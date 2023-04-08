import { useState, useEffect } from "react";
import {Data} from "./Data"

function TablePage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(()=>{
    setFilteredData(Data);
    console.log("avbdf")
  },[])
  // useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     console.log(document.cookie);
    //     const response = await fetch(
    //       "https://frontendtestapi.staging.fastjobs.io/data",
    //       {
    //         headers: {
              
    //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJzdWIiOiIyNjY0Y2I2Mi1hMTlkLTQxYzAtODYwOC0zYjUyN2Y4NmNiM2IiLCJpYXQiOjE2ODA4NjIzNTksImV4cCI6MTY4MDk0ODc1OX0.8uxQBC5IDIII8tsCVXXxfFaz9PmcIbMfV33gdgwb4bY`
    //         }
    //       }
    //     );
       

    //     if (response.ok) {
    //       const data = await response.json();
    //       setData(data);
    //       setFilteredData(data);
    //     } else {
    //       // Redirect to login page if not authorized
    //       // window.location.href = "/login";
    //       console.log(response);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData();
  // }, []);
  

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = filteredData.filter(
      (item) =>
        item.first_name
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        item.last_name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (column) => {
    let sorted;
    if (sortDirection === "asc") {
      sorted = [...filteredData].sort((a, b) =>
        a[column] < b[column] ? -1 : 1
      );
      setSortDirection("desc");
    } else {
      sorted = [...filteredData].sort((a, b) =>
        a[column] < b[column] ? 1 : -1
      );
      setSortDirection("asc");
    }
    setFilteredData(sorted);
  };

  return (
    <div className="h-32" >
      <h1 className="text-2xl absolute  top-5 left-72">Table Page</h1>
      <input
        type="text"
        placeholder="Filter"
        className="w-34 border-4 relative left-56 top-5"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <table className=" absolute left-12 w-11/12 top-24  ">
        <thead>
          <tr className="bg-gray-300">
            <th onClick={() => handleSort("first_name")}>First Name</th>
            <th onClick={() => handleSort("last_name")}>Last Name</th>
            <th onClick={() => handleSort("email")}>Email</th>
            <th onClick={() => handleSort("gender")}>Gender</th>
          
          </tr>
        </thead>
        <tbody className="m-2">
          {filteredData.map((item) => (
            <tr  key={item.id} className="">
              <td  className="p-4 m-1  ">{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
