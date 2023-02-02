import React, { useState,useContext } from 'react'
import '../emp-list.css';
import { Container, Nav, Navbar, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserData from "../UserContext";

function Navigation() {
    const [adddata, setAdddata] = useState({
        name: '', email: '', empId: '', date: '', number: '', companyName: '', departName: '', desiName: ''
    });
    const [getdata, setGetdata] = useState([]);
    const [show, setShow] = useState(false);
    const { value, setValue } = useContext(UserData);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addData = (e) => {
        setAdddata({
            ...adddata,
            [e.target.name]: e.target.value
        })
    }
    let { name, email, empId, date, number, companyName, departName, desiName } = adddata;
    const getData = () => {
        setGetdata([...getdata, { name, email, empId, date, number, companyName, departName, desiName }]);
        setValue([...value, { name, email, empId, date, number, companyName, departName, desiName }]);
        setAdddata({ name: '', email: '', empId: '', date: '', number: '', companyName: '', departName: '', desiName: '' });
        console.log(value);
        // console.log(adddata);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="md">
                <Container>
                    <Navbar.Brand ><Link to='/' className='fw-bolder text-decoration-none text-dark'> Employee</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link><Link to='grid'><i className="fa-solid fa-grip text-dark"></i></Link></Nav.Link>
                            <Nav.Link ><Link to='/'><i className="fa-solid fa-list text-dark"></i></Link></Nav.Link>
                            <Nav.Link ><button className='btn btn-warning rounded-pill' onClick={handleShow}><i className="fa-solid fa-plus pe-2"></i>Add Employee</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='fw-bolder'>
                    Add Employee
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='d-flex justify-content-center form-section align-items-center mb-3'>
                            <div className='form-content'>
                                <label className="form-label">username</label>
                                <input type="text" name='name' autoComplete="off" className="form-control clear" value={adddata.name} onChange={addData} />
                            </div>
                            <div className='form-content'>
                                <label className="form-label">Email</label>
                                <input type="email" name='email' autoComplete="off" className="form-control clear" value={adddata.email} onChange={addData} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center form-section align-items-center mb-3'>
                            <div className='form-content'>
                                <label className="form-label">employee ID</label>
                                <input type="text" name='empId' autoComplete="off" className="form-control clear" value={adddata.empId} onChange={addData} />
                            </div>
                            <div className='form-content'>
                                <label className="form-label">joining date</label>
                                <input type="date" name='date' autoComplete="off" className="form-control clear" value={adddata.date} onChange={addData} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center form-section align-items-center mb-3'>
                            <div className='form-content'>
                                <label className="form-label">phone</label>
                                <input type="text" name='number' autoComplete="off" className="form-control clear" value={adddata.number} onChange={addData} />
                            </div>
                            <div className='form-content'>
                                <label className="form-label">company</label>
                                <select name='companyName' autoComplete="off" className="form-select clear" value={adddata.companyName} onChange={addData}>
                                    <option>Select Company</option>
                                    <option>Glass Info.</option>
                                    <option>DBUG Info.</option>
                                    <option>World Info.</option>
                                    <option>Div Info.</option>
                                </select>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center form-section align-items-center mb-3'>
                            <div className='form-content'>
                                <label className="form-label">department</label>
                                <select name='departName' autoComplete="off" className="form-select clear" value={adddata.departName} onChange={addData}>
                                    <option>Select Department</option>
                                    <option>IT Managment</option>
                                    <option>Advertisement Department </option>
                                    <option>Control-Panel Department.</option>
                                </select>
                            </div>
                            <div className='form-content'>
                                <label className="form-label">designation</label>
                                <select name='desiName' autoComplete="off" className="form-select clear" value={adddata.desiName} onChange={addData}>
                                    <option>Select Designation</option>
                                    <option>Web Devleoper</option>
                                    <option>Front-End Devleoper</option>
                                    <option>Back-End Devleoper</option>
                                    <option>Android Devleoper</option>
                                    <option>Flutter Devleoper</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button variant="warning rounded-pill" autoComplete="off" onClick={() => { getData(); handleClose() }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Navigation
