import axiosInstance from '../axios';

const url = 'search/?q={}&offset={o}&limit=100&apikey=BD3B9B7B148949609BF340E2626A4133&format=json';

export const searchProducts = (value, offset = 0) => {
    let path = url.replace('{}', value).replace(
		'{o}',
		offset
    );
    return axiosInstance.get(path);
  }