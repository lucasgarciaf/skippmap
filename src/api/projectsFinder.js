import data from "./data2.json";

const que = data.data;

export const getPlacesData = async (type, sw, ne) => {
  console.log(que);

  try {
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

    const filteredDataByRegion = que.filter((element) => {
      const latitude = element.latitude;
      const longitude = element.longitude;
      return (
        latitude >= regionCoordinates.latitude.min &&
        latitude <= regionCoordinates.latitude.max &&
        longitude >= regionCoordinates.longitude.min &&
        longitude <= regionCoordinates.longitude.max
      );
    });

    console.log(filteredDataByRegion);
    return filteredDataByRegion;
  } catch (error) {
    console.log(error);
  }
};
