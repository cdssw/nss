export default class Utils {
  static alertError = e => {
    console.log(e);
    let rst = null;
    if(e.response) {
      if(e.response.data) {
        rst = e.response.data;
      } else {
        rst = e.response;
      }
    } else {
      rst = e;
    }
    return rst;
  }
}