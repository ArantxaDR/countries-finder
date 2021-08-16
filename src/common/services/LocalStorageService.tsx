const get = (key : string, defaultData : any) => {
    const data = JSON.parse(localStorage.getItem(key)!);
    return data === null ? defaultData : data;
  };
  
  const set = (key : string, data : any) => {
    //localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export default {
    get: get,
    set: set
  };
  