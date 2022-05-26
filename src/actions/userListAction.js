import axios from 'axios';
//fetch user List
const get_config = () => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Token ' + localStorage.getItem("token")
    }
  };
  return config;
}
export const getUserList = () => async (dispatch) => {
  dispatch(pendingList());
  await axios.get(`http://192.168.0.148:8000/api/v1/patent`, get_config())
    .then(res => {
      if (res.status == 200) {
        dispatch(fetchUserList(res.data.data))
        console.log(res)
      }
    }).catch(err =>
      console.log(err))
}

export const createUsers = (payload) => async (dispatch) => {
  console.log('payloadpayload', payload)
  await axios.post(`http://192.168.0.148:8000/api/v1/patent`, JSON.stringify(payload), get_config())
    .then(res => {
      if (res.data.status == 200) {
        dispatch(createUserData(res.data.data))
      }
    })
    .catch(err => console.log(err))
}

export const searchUserName = (payload) => async (dispatch) => {
  console.log(payload)
  await axios.get(`http://192.168.0.148:8000/api/v1/search/patent?name=${payload}`, get_config())
    .then(res => {
      dispatch(searchName(res.data.data))
    }).catch(err => console.log(err))
}

export const getSingleInfo = (payload) => async (dispatch) => {
  await axios.get(`http://192.168.0.148:8000/api/v1/patent/${payload}`, get_config())
    .then(res => {
      // dispatch(searchName(res.data.data))
      console.log(res)
    }).catch(err => console.log(err))
}

const fetchUserList = (payload) => {
  return {
    type: "GET_USER_LIST",
    payload
  }
}
export const pendingList = () => {
  return {
    type: "PENDING_LIST",

  }
}
export const createUserData = (payload) => {
  return {
    type: "CREATE_NEW_USER",
    payload
  }
}
export const searchName = (payload) => {
  return {
    type: "SEARCH_DATA",
    payload
  }
}
export const removeMessage = (payload) => {
  return {
    type: "REMOVE_DATA",
    payload
  }
}
