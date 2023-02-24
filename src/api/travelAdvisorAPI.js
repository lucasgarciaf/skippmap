// import axios from "axios";

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
//       {
//         params: {
//           bl_latitude: sw.lat,
//           bl_longitude: sw.lng,
//           tr_longitude: ne.lng,
//           tr_latitude: ne.lat,
//         },
//         headers: {
//           "x-rapidapi-key":
//             "392f5a5d0emsh0e74390f020879dp1f8d6fjsn8dc752923815",
//           "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//         },
//       }
//     );

//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  // Coordinates of the region to filter by
  const regionCoordinates = {
    latitude: {
      min: sw.lat,
      max: ne.lat,
    },
    longitude: {
      min: sw.lng,
      max: ne.lng,
    },
  };

  // Function to filter the data by region
  function filterDataByRegion(data) {
    return data.filter((element) => {
      const latitude = element.latitude;
      const longitude = element.longitude;
      return (
        latitude >= regionCoordinates.latitude.min &&
        latitude <= regionCoordinates.latitude.max &&
        longitude >= regionCoordinates.longitude.min &&
        longitude <= regionCoordinates.longitude.max
      );
    });
  }

  // Use axios to read the JSON file and filter the data by region
  axios
    .get("data2.json")
    .then((response) => {
      const data = response.data.data;
      // console.log(data);
      const filteredData = filterDataByRegion(data);
      // console.log(filteredData);
      return filteredData;
    })
    .catch((error) => {
      console.error(error);
    });
};
