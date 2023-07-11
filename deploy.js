// version 2
// const hre = require("hardhat");

// async function main() {
//   // get the contract factory
//   const AINFTToken = await hre.ethers.getContractFactory("AINFTToken");

//   // Start deployment, returning a promise that resolves to a contract object
//   const ainftToken = await AINFTToken.deploy(); 
//   await ainftToken.deployed();

//   console.log("AINFTToken deployed to:", ainftToken.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

//npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers



// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337
//     },
//     localhost: {
//       url: 'http://localhost:8545'
//     },
//     rinkeby: {
//       url: 'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID',
//       accounts: ['YOUR_PRIVATE_KEY']
//     }
//   },
//   solidity: {
//     version: "0.8.4"
//   }
// };






//version 1 
// const { ethers } = require("hardhat");

// async function main() {
//   // Get the contract factory
//   const AINFTToken = await ethers.getContractFactory("AINFTToken");

//   // Deploy the contract
//   console.log("Deploying AINFTToken...");
//   const contract = await AINFTToken.deploy();

//   // Wait for the contract to be mined
//   await contract.deployed();

//   console.log("AINFTToken deployed to:", contract.address);
// }

// // Run the deployment
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });



