import axios from 'axios';

const URL = 'https://spacelaunchnow.me/api/3.3.0/launch';

const transform = ({ data }) => data;

export const getUpcomingLaunches = () => axios.get(`${URL}/upcoming/`).then(transform);

export const getLaunch = (id) => axios.get(`${URL}/${id}/`).then(transform);