import web3 from './web3';
import SimpleStorageArtifact from '../../../build/contracts/SimpleStorage.json';

// Deployed contract address (update with your actual contract address)
const SimpleStorageAddress = '0x6b4eb3a421802A3C27230391101Ca18F12BCE22E';

const SimpleStorage = new web3.eth.Contract(SimpleStorageArtifact.abi, SimpleStorageAddress);

export {
    SimpleStorage
};
