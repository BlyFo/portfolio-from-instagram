import axios from 'axios';
import { instagramUserName } from '../Config/PersonalInfo';

document.cookie = 'sessionid=7515213976%3AWvUsmarQ06xBGY%3A22';
const axiosConfig = {
  withCredentials: true,
  headers: {
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'true',
    "Accept": "/",
    "Cache-Control": "no-cache",
    //"Cookie": document.cookie
  },
  credentials: "same-origin"
};

export const GetUsers = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const resGet = await axios.get(url)
    if (resGet.status === 200) {
      const data = await resGet.data
      return data
    } else {
      return -1
    }
  } catch (error) {
    console.log(error)
    return -1
  }
}
export const GetUserInfo = async () => {
  //https://www.youtube.com/watch?v=hxyp_LkKDdk&ab_channel=HongLy
  //https://www.youtube.com/watch?v=4B5WgTiKIOY&ab_channel=JennyChannel-T%E1%BB%ABDeveloper%C4%91%E1%BA%BFnSeller
  try {
    const url = `https://www.instagram.com/${instagramUserName}/?__a=1`;
    const resGet = await axios.get(url, axiosConfig)
    /*{
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': 'true'
      }
    }*/
    //'cookie': "sessionid=7515213976%3AWvUsmarQ06xBGY%3A22;"
    //expressApp.use(cors({ credentials: true, origin: "http://localhost:8080" }));
    //console.log(resGet.data)
    if (resGet.status === 200) {
      const data = await resGet.data
      return data.graphql.user
    } else {
      return -1
    }
  } catch (error) {
    console.log(error + 1)

    return -1
  }
}
export const GetVideo = async (url) => {
  try {
    const resGet = await axios.get(url, axiosConfig)
    if (resGet.status === 200) {
      const data = await resGet.request.responseURL
      return data;
    } else {
      return -1
    }
  } catch (error) {
    console.log(error + 1)
    return -1
  }
}
export const GetUserImage = async () => {
  try {
    const url = 'https://instagram.fcor14-1.fna.fbcdn.net/v/t51.2885-19/273901486_920640525309116_9132684757327553359_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcor14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NnD2D1V-604AX9TO8Y_&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_YmBh22UrMnwkH1jJ0mqHDkLyS6QIoClnbF_ldVsJOzw&oe=6218DA93&_nc_sid=7bff83';
    const resGet = await axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': 'true'
      }
    })
    if (resGet.status === 200) {
      const data = await resGet.data
      console.log(data)
      return data
    } else {
      return -1
    }
  } catch (error) {
    console.log(error)
    return -1
  }
}
