import axios from 'axios';
import qs from 'qs';
//const ZENDIT_API_KEY = process.env.ZENDIT_API_KEY;
//const BASE_URL = process.env.ZENDIT_BASE_URL;

const ZENDIT_API_KEY =
  'sand_60bdf3ba-6d18-41cf-aa9f-c8707d4d72e4685982c95c9e02f6f6026066';
const BASE_URL = 'https://api.zendit.io/v1/esim';

console.log(ZENDIT_API_KEY);
console.log(BASE_URL);
const headers = {
  Authorization: `Bearer ${ZENDIT_API_KEY}`,
  'Content-Type': 'application/json',
};

export const fetchEsims = async ({limit, offset, country, brand}) => {
    const params = {
    _limit: limit,
    _offset: offset,
    country,
    brand,
    regions: '',
    subType: '',
  };
  console.log(
  "This is the url " + `${BASE_URL}/offers?` + qs.stringify(params)
);
  const res = await axios.get(`${BASE_URL}/offers`, { headers, params });
  return res.data;

  return "I am working"
};

/*


purchaseEsim = async (productId) => {
  const body = {
    product_id: productId,
  };

const res = await axios.post(`${BASE_URL}/esim/purchase`, body, { headers });
  return res.data;
};
getTransactionById = async (id) => {
  const res = await axios.get(`${BASE_URL}/transaction/${id}`, { headers });
  return res.data;
};

*/
