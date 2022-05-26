import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleInfo } from "../actions/userListAction";

const UserInfo=()=>{
    const params=useParams();
    const dispatch =useDispatch()
    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async ()=>{
        dispatch(getSingleInfo(params.id))
       }

    return (
        <>


        </>
    )
}
export default UserInfo;