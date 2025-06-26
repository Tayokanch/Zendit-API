🔐 **Environment Variables**
ZENDIT_API_KEY=`your_sandbox_api_key_here`
PORT = 3000

📥 Task 1: Fetch Available eSIMs
✅ **Purpose**
This endpoint fetches a list of available eSIMs from Zendit's sandbox API. It supports required pagination controls (limit, offset) and optional filtering by country and brand (network type).

🔧 **Endpoint**
GET /esims

📌 **Query Parameters**

| Parameter | Required | Default | Description                            |
| --------- | -------- | ------- | -------------------------------------- |
| `limit`   | ✅ Yes    | `50`    | Number of results per request          |
| `offset`  | ✅ Yes    | `5`     | Starting point for pagination          |
| `country` | ❌ No     | ""       | Filter results by ISO country code (e.g., `AD` `US` `AE` )  |
| `brand`   | ❌ No     | ""       | Filter by brand/network (e.g., `eSIM`) |

If country and/or brand are provided, they are included as filters in the request. If not provided, the API will return results across all regions and brands.

⚙️ **Behavior & Defaults**
If no query parameters are provided, default values are automatically applied:

req.query.limit || '50';
req.query.offset || '5';
