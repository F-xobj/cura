import axios from "axios";

export const getClinicData = async () => {
  const url = "https://cura-front-end-test.herokuapp.com/";
  const data = await axios
    .get(url)
    .then((response) => JSON.parse(response?.data));

  return data;
};
