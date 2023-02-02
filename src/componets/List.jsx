import React, { useContext } from 'react'
import Navigation from './Navigation'
import UserData from "../UserContext";

function List(props) {
    const { value } = useContext(UserData);

    return (
        <>
            <Navigation />
            <table className="table table-striped container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Join Date</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        value.map((i) => {
                            return (
                                <>
                                    <tr key={i.empId}>
                                        <th scope="row">{i.name}</th>
                                        <td>{i.empId}</td>
                                        <td>{i.email}</td>
                                        <td>{i.number}</td>
                                        <td>{i.date}</td>
                                        <td>{i.desiName}</td>
                                    </tr>
                                </>
                            )

                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default List
