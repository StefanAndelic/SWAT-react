import { create } from "apisauce";

const apiClient = create({
  //baseURL: `${dev_config.development_url}:${dev_config.port}/api`,
  baseURL: "http://192.168.1.9:3900/api",
});

export default apiClient;
