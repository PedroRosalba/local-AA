const { ethers } = require('ethers');

// Replace with your Infura/Alchemy URL or local node URL
const provider = new ethers.providers.JsonRpcProvider('https://sepolia.drpc.org');

// Replace with your private key
const privateKey = '840ef5dbff7cdcecc7220f7ba9ae31151459e49da1a92f8feabbcac8f604da9c';
const wallet = new ethers.Wallet(privateKey, provider);

// Replace with your deployed contract address
const contractAddress = '0x89ac444560503718643Af7cc57643Abfcbdaec40';

// ABI of the MyToken contract (only the mint function is needed)
const abi = [
    "function mint(address recipient) public"
];

const contract = new ethers.Contract(contractAddress, abi, wallet);

async function mintTokens(recipientAddress) {
    try {
        const tx = await contract.mint(recipientAddress);
        console.log('Transaction hash:', tx.hash);
        await tx.wait();
        console.log('Minting successful!');
    } catch (error) {
        console.error('Minting failed:', error);
    }
}

// Replace with your account address
const recipientAddress = '0x7d85Dd7A8c69425a814a3bF64931e7CF6e818d9C';

mintTokens(recipientAddress);
