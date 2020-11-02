class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  post(post) {
    try {
      const request = new Request(this.url + '/goods.json', {
        method: 'post',
        body: JSON.stringify(post),
      });
      return useRequest(request);
    } catch (err) {
      console.error(err);
    }
  }

  get() {
    try {
      const request = new Request(this.url + '/goods.json', {
        method: 'get',
      });
      return useRequest(request);
    } catch (err) {
      console.log(err);
    }
  }
}

function useRequest(request) {
  const response = fetch(request);
  return response.then((res) => res.json());
}

export const apiService = new ApiService(
  'https://js-simple-6efdf.firebaseio.com'
);
