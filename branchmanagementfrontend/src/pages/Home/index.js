import { useState, useEffect } from "react";

import { IoMdAddCircle } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";
import { BsFiletypeXls } from "react-icons/bs";
import { HiViewColumns } from "react-icons/hi2";
import { MdFullscreen } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { IoReloadCircleSharp } from "react-icons/io5";

import Navbar from "../../Components/Navbar";
import ApiUrl from "../../ApiUrl";
import "./index.css";

// http://localhost:5000/api/branches
// http://localhost:5000/api/branches/:id
//http://localhost:5000/api/branches/searchBranch?branchName=chennai

const Home = () => {
    // const onSubmit = (event) => {
    //     event.preventDefault();

    // };
    const searchBranch = async (event) => {
        // console.log(event);
        if (event.key === "Enter") {
            const searchValue = event.target.value.trim();
            if (searchValue === "") {
                alert("Please enter a search term.");
                return;
            }
            try {
                const response = await fetch(
                    `${ApiUrl}/api/branches/searchBranch?branchName=${searchValue}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                //console.log(response);
                if (response.ok) {
                    const data = await response.json();
                    //console.log(data);
                    setListOfRows(data);
                    if (data.length === 0) {
                        alert("No Result Found");
                    }
                } else {
                    setListOfRows([]);
                    alert("Failed to fetch branch. Please try again.");
                }
            } catch (error) {
                console.error("Error fetching branch:", error);
                alert("An error occurred while searching for branch.");
            }
        }
    };
    const [listOfRows, setListOfRows] = useState([]);
    useEffect(() => {
        const fetchIntially = async () => {
            try {
                const response = await fetch(`${ApiUrl}/api/branches`);
                const data = await response.json();

                //console.log(data.branches);
                setListOfRows(data.branches);
            } catch (error) {
                console.error("Error fetching branch:", error);
            }
        };

        fetchIntially();
    }, []);

    return (
        <div className="p-3 Home-container">
            <Navbar />
            <div className="home-branch-container d-flex flex-column p-3 rounded-4 ">
                <h1 className="home-branch-heading mb-0">Branch</h1>
                <hr />

                <div className="d-flex justify-content-between align-items-center search-container">
                    <div>
                        <IoMdAddCircle className=" mb-3 m-2 home-add-icon" />
                        <IoMdSearch className="home-icons" />
                        <input
                            type="text"
                            name="search"
                            onKeyDown={(event) => searchBranch(event)}
                            placeholder="Search"
                            aria-label="Search"
                            className="search-input p-1 rounded-1"
                        />
                    </div>

                    <div className="d-flex flex-row">
                        <MdFileUpload className="home-icons" />
                        <BsFiletypeXls className="home-icons" />
                        <HiViewColumns className="home-icons" />
                        <MdFullscreen className="home-icons" />
                    </div>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <th>Branch Name</th>
                            <th>Branch Code</th>
                            <th>Branch Short Name</th>
                            <th>Locality</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Contact Persion</th>
                            <th>Contact Persion Phone</th>
                            <th>Pan No</th>
                            <th>GSTIN</th>
                            <th>Status</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {listOfRows.map((eachRow, index) => (
                                <tr key={index}>
                                    <td>{eachRow.branchDetails.branchName}</td>
                                    <td>{eachRow.branchDetails.branchCode}</td>
                                    <td>
                                        {eachRow.branchDetails.branchShortName}
                                    </td>
                                    <td>{eachRow.branchDetails.locality}</td>
                                    <td>{eachRow.branchDetails.city}</td>
                                    <td>{eachRow.branchDetails.state}</td>

                                    <td>
                                        {
                                            eachRow.contactPersonDetails
                                                .contactPersonName
                                        }
                                    </td>
                                    <td>
                                        {
                                            eachRow.contactPersonDetails
                                                .contactNumber
                                        }
                                    </td>

                                    <td>{eachRow.branchDetails.panNumber}</td>
                                    <td>{eachRow.branchDetails.gstIn}</td>
                                    <td
                                        className={
                                            eachRow.status
                                                ? "active"
                                                : "inactive"
                                        }
                                    >
                                        {eachRow.status ? "ACTIVE" : "DiActive"}
                                    </td>

                                    <td>
                                        <MdEdit />
                                        <GrFormView />
                                        <IoReloadCircleSharp />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
