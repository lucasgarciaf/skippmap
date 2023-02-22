import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "392f5a5d0emsh0e74390f020879dp1f8d6fjsn8dc752923815",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// import data from "../../public/data.json";

// axios
//   .get("data.json")
//   .then((response) => {
//     const places = response.data.places;
//     console.log(places);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
