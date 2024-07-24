import web3 from './web3';
import ExampleContract from '../../../build/contracts/ExampleContract.json';

// Deployed contract address (update with your actual contract address)
const exampleContractAddress = '0xYourContractAddressHere';

const exampleContract = new web3.eth.Contract(ExampleContract.abi, exampleContractAddress);

export {
    exampleContract
};
