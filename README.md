# MarketFlow

**MarketFlow** is a real-time trade price dashboard that visualizes stock trade prices using a React frontend, Node.js backend with Express, WebSocket integration with Finnhub API, and Fluvio for data streaming.

## Screenshot
<img width="1706" alt="Screenshot 2024-08-22 at 2 00 28 PM" src="https://github.com/user-attachments/assets/ff37f6b4-35dd-41d8-9e7a-1e6712b16538">


## Project Structure

- `client/` - Contains the React frontend application.
- `server/` - Contains the Node.js backend application.
- `deploy.sh` - Script to set up Fluvio locally with the topic `message`.

## Features

- Real-time stock trade price updates.
- Interactive dashboard for monitoring stock prices.
- Utilizes Fluvio for scalable and efficient data streaming.
- WebSocket integration with Finnhub API for real-time trade data.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://classic.yarnpkg.com/) (for package management)
- [Fluvio](https://fluvio.io/) (for data streaming)
- [Finnhub API](https://finnhub.io/) account for WebSocket API

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Thund3rHawk/MarketFlow.git
cd MarketFlow
```

### 2. Install Dependencies

#### For the Backend (Server)

Navigate to the `server` directory and install dependencies using Yarn:

```bash
cd server
yarn install
```

#### For the Frontend (Client)

Navigate to the `client` directory and install dependencies using Yarn:

```bash
cd ../client
yarn install
```

### 3. Set Up Fluvio

Make sure Fluvio is installed and running locally. Use the provided `deploy.sh` script to set up Fluvio with the required topic:

```bash
cd ..
chmod +x deploy.sh
./deploy.sh
```

### 4. Configure Finnhub API

You need to configure the Finnhub API key in your backend environment. Create a `.env` file in the `server` directory with the following content:

```
PORT = 8080
FINNHUB_API_KEY=your_finnhub_api_key
```

Replace `your_finnhub_api_key` with your actual API key from Finnhub.

### 5. Start the Applications

#### Start the Backend Server

Navigate to the `server` directory and start the server:

```bash
cd server
yarn dev
```

#### Start the Frontend Client

Navigate to the `client` directory and start the client:

```bash
cd ../client
yarn dev
```

### 6. Access the Dashboard

Open your web browser and go to `http://localhost:5173` to access the real-time trade price dashboard.


---
