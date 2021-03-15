const storeToken = async (authToken) => {
  try {
    localStorage.setItem("token", authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    localStorage.getItem("token");
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, removeToken, storeToken };
