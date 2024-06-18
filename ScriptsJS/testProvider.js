const { ethers } = require('ethers');

// Replace with your Infura/Alchemy URL or local node URL
const provider = new ethers.providers.JsonRpcProvider('https://rpc.sepolia.dev');

console.log(provider);
