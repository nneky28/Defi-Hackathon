var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
export default class Request {
    
  requestOptions = (data) => {

    return {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };
  };

  get = async ({ url }) => {
    try {
       const res = await fetch(url);
       return res.json()
    } catch (error) {
        console.log(error)
        return error
    }
  };

  post = async ({ url, data, message }) => {
    await fetch(`${url}`, this.requestOptions(data))
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return error
        console.log("error", error);
      });
  };
}
