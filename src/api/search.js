import api from "../axios/api";

const getPostSearch = async (keyword) => {
  console.log(keyword)
  const response = await api.get(`/v2/search/web`,{
    params: {
      query: keyword,
    },});
  console.log(response.data)
  return response.data;
};

const getVideoSearch = async (keyword) => {
  console.log(keyword)
  const response = await api.get(`/v2/search/vclip`,{
    params: {
      query: keyword,
    },});
  console.log(response.data)
  return response.data;
};

const getImageSearch = async (keyword) => {
  console.log(keyword)
  const response = await api.get(`/v2/search/image`,{
    params: {
      query: keyword,
    },});
  console.log(response.data)
  return response.data;
};

const getBlogSearch = async (keyword) => {
  console.log(keyword)
  const response = await api.get(`/v2/search/blog`,{
    params: {
      query: keyword,
    },});
  console.log(response.data)
  return response.data;
};

const getBookSearch = async (keyword) => {
  console.log(keyword)
  const response = await api.get(`/v3/search/book`,{
    params: {
      target:'title',
      query:keyword
    },});
  console.log(response.data)
  return response.data;
};

const getCafeSearch = async (keyword) => {
  console.log(keyword)
  const response = await api.get(`/v2/search/cafe`,{
    params: {
      query: keyword,
    },});
  console.log(response.data)
  return response.data;
};

export { getCafeSearch,getImageSearch,getPostSearch,getBookSearch,getVideoSearch,getBlogSearch};