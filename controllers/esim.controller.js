import {
  fetchEsims,
  getTransactionById,
  purchaseEsim,
} from '../services/zenditService.js';
const fetchEsimController = async (req, res) => {
  try {
    const limit = req.query._limit || 100;
    const offset = req.query._offset || 0;
    const country = req.query.country;
    const brand = req.query.brand;

    const esims = await fetchEsims({ limit, offset, country, brand });
    res.json(esims);
  } catch (err) {
    console.error(' Failed to fetch eSIMs:', err.message);
    res.status(500).json({ error: 'Error fetching eSIMs.' });
  }
};

const purchaseEsimController = async (req, res) => {
  try {
    const { offerId, transactionId } = req.body;

    if (!offerId || !transactionId) {
      return res.status(400).json({
        error:
          'Missing required fields: offerId and transactionId are required.',
      });
    }
    const eSim = await purchaseEsim(offerId, transactionId);
    console.log('Purchased Esim Response:', eSim);
    res.json(eSim);
  } catch (err) {
    console.error(' Failed to puchase eSIMs:', err.message);
    res.status(500).json({ error: 'Error purchasing eSIM.' });
  }
};

const getTransactionByIdController = async (req, res) => {
  try {
    const { id: transactionId } = req.params;

    const transaction = await getTransactionById(transactionId);
    console.log('Transaction', transaction);
    res.json(transaction);
  } catch (err) {
    console.error(' Failed to get transaction by ID:', err.message);
    res.status(500).json({ error: 'Error getting transaction by ID.' });
  }
};

export {
  fetchEsimController,
  purchaseEsimController,
  getTransactionByIdController,
};
