const getWeatherByCity = async (city: string) => {
  const url = "link api ";
  const response = await fetch(url);
  const weather = await response.json();
  return weather;
};

export { getWeatherByCity };
