import axios from 'axios';
import { instagramUserName, instagramUserQuery_hash } from '../Config/PersonalInfo';

const axiosConfig = {
  withCredentials: true,
  headers: {
    'content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'true',
    "Accept": "/",
    "Cache-Control": "no-cache",
  },
  credentials: "same-origin"
};
export const GetUserInfo = async () => {
  //https://www.youtube.com/watch?v=hxyp_LkKDdk&ab_channel=HongLy
  //https://www.youtube.com/watch?v=4B5WgTiKIOY&ab_channel=JennyChannel-T%E1%BB%ABDeveloper%C4%91%E1%BA%BFnSeller
  try {
    const url = `https://www.instagram.com/${instagramUserName}/?__a=1`;
    const resGet = await axios.get(url, axiosConfig)
    if (resGet.status === 200) {
      const data = await resGet.data
      return data.graphql.user
    } else {
      return -1
    }
  } catch (error) {
    console.log(error)

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
    console.log(error)
    return -1
  }
}
export const GetPosts = async (id, next, amount) => {
  const postAmount = (amount === undefined) ? 12 : amount;

  const variables = encodeURIComponent(`{"id":"${id}","first":${postAmount},"after":"${next}"}`);
  const url = `https://www.instagram.com/graphql/query/?query_hash=${instagramUserQuery_hash}&variables=${variables}`;

  try {
    const resGet = await axios.get(url, axiosConfig);
    if (resGet.status === 200) {
      const data = await resGet.data.data.user.edge_owner_to_timeline_media;
      return data;
    } else {
      return -1
    }
  } catch (error) {
    console.log(error);
    return -1
  }
}
export const GetPostInformation = async (postShortCode) => {

  const url = `https://www.instagram.com/p/${postShortCode}/?__a=1`;
  try {
    const resGet = await axios.get(url, axiosConfig);
    console.log(resGet);
    if (resGet.status === 200) {
      const data = await resGet.data;
      return data;
    } else {
      return -1
    }
  } catch (error) {
    console.log(error + 2);
    console.log(url);
    return -1
  }
}
