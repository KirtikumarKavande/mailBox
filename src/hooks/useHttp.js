const useHttp = () => {
  const httpFunc = async (url, obj, getHttpData) => {
    const res = await fetch(`${url}`, {
      method: obj.method ? obj.method : "GET",
      body: obj.body ? JSON.stringify(obj.body) : null,
      headers: obj.headers ? obj.headers : {},
    });
    const data = res.json();

    getHttpData(data);
  };

  return httpFunc;
};

export default useHttp;
