const getIconName = (value) => {
  switch (value) {
    case 'Rain':
      return 'cloud_rain';
    case 'Clear':
      return 'sun';
    case 'Clouds':
      return 'sun_cloud';
    default:
      return 'cloud';
  }
};
export default getIconName;
