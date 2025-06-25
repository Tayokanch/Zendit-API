import { fetchEsims, purchaseEsim } from '../services/zenditService.js';
const fetchEsimController = async (req, res) => {
  try {
    const limit = req.query.limit || '50';
    const offset = req.query.offset || '5';
    const country = req.query.country;
    const brand = req.query.brand;

    const esims = await fetchEsims({ limit, offset, country, brand });
    console.log('Available eSIMs:', esims);
    res.json(esims);
  } catch (err) {
    console.error(' Failed to fetch eSIMs:', err.message);
    res.status(500).json({ error: 'Error fetching eSIMs.' });
  }
};

const purchaseEsimController = async (req, res) => {
  try {
    const productId = req.productId;
    const eSim = await purchaseEsim(productId);
    console.log('Purchased Esim Response:', eSim);
    res.json(eSim);
  } catch (err) {
    console.error(' Failed to puchase eSIMs:', err.message);
    res.status(500).json({ error: 'Error purchasing eSIM.' });
  }
};

export { fetchEsimController, purchaseEsimController };
