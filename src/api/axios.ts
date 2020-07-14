import axios from "axios";

const webConfigEnv = (window as any).env;

export class Server {
  constructor() {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          if (localStorage.refreshToken && localStorage.jwtToken) {
            const tokenData = {
              accessToken: localStorage.jwtToken,
              refreshToken: localStorage.refreshToken,
            };
            this.post(`${webConfigEnv.SERVER_URL}/auth/refreshToken`, tokenData)
              .then((data: any) => {
                if (data.ok) {
                  localStorage.setItem("jwtToken", data.tokens.accessToken);
                  localStorage.setItem(
                    "refreshToken",
                    data.tokens.refreshToken
                  );
                  localStorage.setItem("userInfo", JSON.stringify(data.user));
                }
              })
              .then(() => {
                const config = error.config;
                config.headers = {
                  Authorization: "Bearer " + localStorage.jwtToken,
                };
                axios.request(config);
              });
          }
        }
      }
    );
  }

  public request(config: any) {
    return axios.request(config);
  }
  public get(url: string, config = {} as any): any {
    config = config || {};
    config.headers = config.headers || {};
    var userContext = JSON.parse(localStorage.getItem("userContext") || "{}");
    config.headers.Authorization =
      "Bearer " + (userContext.token || {}).accessToken;
    config.baseURL = config.baseURL || webConfigEnv.SERVER_URL;
    return axios.get(url, config).then((r) => r?.data);
  }
  public delete(url: string, config = {} as any): any {
    config = config || {};
    config.headers = config.headers || {};
    var userContext = JSON.parse(localStorage.getItem("userContext") || "{}");
    config.headers.Authorization =
      "Bearer " + (userContext.token || {}).accessToken;
    config.baseURL = config.baseURL || webConfigEnv.SERVER_URL;
    return axios.delete(url, config).then((r) => r.data);
  }
  public head(url: string, config = {} as any): any {
    config = config || {};
    config.headers = config.headers || {};
    var userContext = JSON.parse(localStorage.getItem("userContext") || "{}");
    config.headers.Authorization =
      "Bearer " + (userContext.token || {}).accessToken;
    config.baseURL = webConfigEnv.SERVER_URL;
    return axios.head(url, config);
  }
  public token(url: string, data: any, config = {} as any) {
    config.baseURL = webConfigEnv.SERVER_URL;
    return axios.post(url, data, config).then((r) => r.data);
  }

  public post(url: string, data: any, config = {} as any): any {
    config = config || {};
    config.headers = config.headers || {};
    var userContext = JSON.parse(localStorage.getItem("userContext") || "{}");
    if (!!(userContext.token || {}).accessToken) {
      config.headers.Authorization =
        "Bearer " + (userContext.token || {}).accessToken;
    }
    config.baseURL = config.baseURL || webConfigEnv.SERVER_URL;
    return axios.post(url, data, config).then((r) => r.data);
  }
  public put(url: string, data: any, config = {} as any): any {
    config = config || {};
    config.headers = config.headers || {};
    var userContext = JSON.parse(localStorage.getItem("userContext") || "{}");
    config.headers.Authorization =
      "Bearer " + (userContext.token || {}).accessToken;
    config.baseURL = webConfigEnv.SERVER_URL;
    return axios.put(url, data, config).then((r) => r.data);
  }
  public patch(url: string, data: any, config = {} as any): any {
    config = config || {};
    config.headers = config.headers || {};
    var userContext = JSON.parse(localStorage.getItem("userContext") || "{}");
    config.headers.Authorization =
      "Bearer " + (userContext.token || {}).accessToken;
    config.baseURL = webConfigEnv.SERVER_URL;
    return axios.patch(url, data, config).then((r) => r.data);
  }
}
export const server = new Server();
