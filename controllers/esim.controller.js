
import { fetchEsims } from "../services/zenditService.js";
const getAvailableEsims = async (req, res) => {

  try {
    const limit = req.query.limit || '50';
    const offset = req.query.offset || '5';
    const country = req.query.country || 'US';
    const brand = req.query.brand || 'eSIM';

    const esims = await fetchEsims({limit, offset, country, brand});
    console.log('📦 Available eSIMs:', esims);
    res.json(esims);
  } catch (error) {
    console.error('❌ Failed to fetch eSIMs:', error.message);
    res.status(500).json({ error: 'Error fetching eSIMs.' });
  }}


export {getAvailableEsims}