import TOKEN from '../token';
const BASE_URL = 'https://api.github.com';

const getUser = username => {
  const URL = `${BASE_URL}/users/${username}?access_token=${TOKEN}`;
  return fetch(URL) // eslint-disable-line no-undef
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Non-200 API response');
      }
      return res.json();
    })
    .catch(err => {
      console.error(err);
    });
};

export default getUser;
