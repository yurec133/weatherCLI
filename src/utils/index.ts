const dayWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const monthYear = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

//Format Date
export const formatDate = (d: number) => {
  const today = new Date(d * 1000);

  const day = today.getUTCDay();
  const date = today.getUTCDate();
  const month = today.getUTCMonth();
  const hours = today.getUTCHours();
  const minutes = today.getUTCMinutes();

  return `${dayWeek[day]}, ${date} ${monthYear[month]}, ${hours}:${minutes}0`;
};

export const uniqueDay = (arr: any[]) => {
  const arrayUniqueDay = new Map(
    arr.map(item => {
      return [new Date(item.dt * 1000).getDate(), item];
    }),
  ).values();
  return [...arrayUniqueDay];
};
export const uniqueItem = (arr: string[]) => {
  return arr.filter((item: string, index: number) => !(index % 8));
};

export const getIconsWeather = (code: string): (() => void) => {
  const objIcons: {[index: string]: () => string} = {
    '01d': require('../../assets/icons/01d.png'),
    '02d': require('../../assets/icons/02d.png'),
    '03d': require('../../assets/icons/03d.png'),
    '04d': require('../../assets/icons/04d.png'),
    '09d': require('../../assets/icons/09d.png'),
    '10d': require('../../assets/icons/10d.png'),
    '11d': require('../../assets/icons/11d.png'),
    '13d': require('../../assets/icons/13d.png'),
    '50d': require('../../assets/icons/50d.png'),
    default: require('../../assets/icons/01d.png'),
  };
  return objIcons[code] || objIcons.default;
};
