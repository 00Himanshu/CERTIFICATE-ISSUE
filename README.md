# Certificate Issue

This project is a decentralized application (dApp) for issuing and managing certificates on the blockchain. It leverages smart contracts to ensure the authenticity and immutability of certificates. The project includes a frontend built with React and Vite, and smart contracts written in Solidity.

## Requirements
To run this project, you need the following:

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **MetaMask** extension for interacting with the Ethereum blockchain
- **Hardhat** for compiling and deploying smart contracts

## Installation

### Clone the repository:
```bash
git clone https://github.com/00Himanshu/CERTIFICATE-ISSUE.git
cd CERTIFICATE-ISSUE
```

### Install dependencies:
```bash
npm install
```

### Navigate to the `ui` directory and install frontend dependencies:
```bash
cd ui
npm install
```

## Smart Contracts
The smart contracts are located in the `contracts` directory. The main contracts include:

- **Certi.sol**: Manages the issuance of certificates.
- **Governer.sol**: Handles governance functionalities.
- **TimeLock.sol**: Implements a timelock mechanism for executing proposals.
- **Token.sol**: ERC20 token used for governance.

### Compile Contracts
To compile the smart contracts, run:
```bash
npx hardhat compile
```

### Deploy Contracts
To deploy the contracts to a local blockchain, run:

1. Start a local blockchain:
   ```bash
   npx hardhat node
   ```

2. In a new terminal, deploy the contracts:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

## Frontend
The frontend is built with React and Vite. It interacts with the deployed smart contracts using `ethers.js`.

### Run the Frontend

1. Navigate to the `ui` directory:
   ```bash
   cd ui
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. The application will be available at [http://localhost:3000](http://localhost:3000).

## Functionality

### Connect MetaMask
Users can connect their MetaMask wallet to interact with the dApp. The connection status is displayed on the top-right corner of the application.

### Issue Certificates
Admins can issue certificates by providing details such as the recipient's name, course, grade, and date. The issued certificates are stored on the blockchain and can be verified by anyone.

### Governance
The application includes governance functionalities where users can create and vote on proposals. Proposals may include actions such as issuing certificates or managing roles.

### Role Management
Admins can grant roles such as Proposer, Executor, and Admin to other users. This is managed through the governance smart contracts.

### Mint Tokens
Admins can mint new tokens that are used for governance voting. The total supply of tokens is displayed in the application.

## Deployment
The application is deployed on Vercel and can be accessed at:

[https://certificate-issue.vercel.app/](https://certificate-issue.vercel.app/)

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Authors
- **Himanshu**
- **Soumya**
- **Bibungsarth**
- **Yash**

## Acknowledgements
- **OpenZeppelin** for their secure and community-reviewed smart contract libraries.
- **Hardhat** for providing a comprehensive development environment for Ethereum software.
- **Vercel** for hosting the frontend application.

