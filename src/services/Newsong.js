import axios from "axios";

const url = process.env.REACT_APP_SERVICE_NEWSONG;

export async function postSearch(props) {
  return axios({
    url: url + "/search",
    method: 'POST',
    params: {
      page: props.page,
      size: props.size,
      sort: props.sort,
    },
    data: props.body,
    headers: { Authorization: "Bearer " + props.token }
  });
}

export async function postSearchOne(props) {
  return axios({
    url: url + "/search/" + props.songNo,
    method: 'POST',
    params: {
      page: '0',
      size: '100',
    },
    data: props.body,
    headers: { Authorization: "Bearer " + props.token }
  });
}