import React, { useState, useEffect } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createUsers, getUserList, searchUserName, removeMessage } from "../actions/userListAction";
import Toaster from "../utils/Toaster";
import AddViewUser from "./AddUser";
let initialState = {
    name: '',
    email: '',
    phone: '',
    date_of_birth: ''
}
const Home = () => {
    const data = useSelector(state => state.userListReducer)
    const { list, pending } = data
    const [userDataList, setUserDataList] = useState(list)
    const [show, setShow] = useState(false);
    const [addEdit, setAddEdit] = useState(false);
    const [showToaster, setShowToaster] = useState(false);
    const [userData, setUserData] = useState(initialState)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserList())
    }, [])
    useEffect(() => {
        setUserDataList(list)
        setShow(false)
    }, [list])
    useEffect(() => {
        if (data.created) {
            setUserData(initialState)
            setShowToaster(true)
            setTimeout(() => {
                setShowToaster(false)
                dispatch(removeMessage())
            }, 3000);
        }

    }, [data.created])

    const handleChange = ({ target: { name, value } }) => {
        setUserData({
            ...userData,
            [name]: value
        })
    }
    const addNewUser = () => {
        dispatch(createUsers(userData))
    }
    const searchData = ({ target: { value } }) => {
        dispatch(searchUserName(value))
    }
    const handleClose = () => {
        setShow(false);
        setUserData(initialState)
    };
    const openModal = (e, data) => {
        console.log(data, 'llllllllllll')
        if (data !== undefined) {
            setUserData({ ...data });
            setAddEdit(true)
        } else {
            setAddEdit(false)
        }
        setShow(true);
    }
    return (
        <>
            {showToaster && <Toaster />}
            <div className="addSerchBox">

                <div>
                    <div className="d-flex">
                        <InputGroup className="mb-3">
                            <FormControl
                                type="search"
                                placeholder="search"
                                onChange={(e) => searchData(e)}
                            />
                        </InputGroup>
                        <Button onClick={(e) => openModal(e)}>Add</Button>
                    </div>
                    {
                        pending ? <p>data Lofinf</p> : <table id="customers">
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                {/* <th>Email</th>
                                <th>Phone Number</th>
                                <th>D-O-B</th> */}

                            </tr>
                            {
                                userDataList.length ? userDataList?.map((item, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td onClick={(e) => openModal(e, item)}>{item.name}</td>
                                            </tr>
                                        </>
                                    )
                                })
                                    : <p>No Data Found</p>
                            }
                        </table>
                    }

                </div>
                {show &&
                    <AddViewUser
                        userData={userData}
                        addEdit={addEdit}
                        handleChange={handleChange}
                        handleClose={handleClose}
                        addNewUser={addNewUser}
                    />
                }
            </div>

        </>
    )
}
export default Home;
