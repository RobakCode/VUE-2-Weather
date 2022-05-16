const getTodayDateString = () => (new Date()).toISOString().split('T')[0];

const getTodayTimeString = () => ((new Date()).toISOString().split('T')[1].split('.'))[0];

const getTimeFromDtTxt = (value) => value.split(' ')[1].split(':').slice(0, 2).join(':');

export {
  getTodayDateString,
  getTodayTimeString,
  getTimeFromDtTxt,
};
