import axios from 'axios';
import qs from 'qs';
import dotenv from 'dotenv';
dotenv.config();

const ZENDIT_API_KEY = process.env.ZENDIT_API_KEY;
const BASE_URL = process.env.BASE_URL;

const headers = {
  Authorization: `Bearer ${ZENDIT_API_KEY}`,
  'Content-Type': 'application/json',
};

export const fetchEsims = async ({ limit, offset, country, brand }) => {
  const params = {
    _limit: limit,
    _offset: offset,
    country,
    brand,
  };
  console.log(
    'This is the url ' + `${BASE_URL}/offers?` + qs.stringify(params)
  );
  const res = await axios.get(`${BASE_URL}/offers`, { headers, params });
  return res.data;
};

export const purchaseEsim = async (product_id, transactionId) => {

   const body = {
    offerId: product_id,  
    transactionId,
  };

  const res = await axios.post(`${BASE_URL}/purchases`, body, { headers });
  return res.data;
};

export const getTransactionById = async (transactionId) => {
  
  const res = await axios.get(`${BASE_URL}/purchases/${transactionId}`, { headers });
  return res.data;
};
