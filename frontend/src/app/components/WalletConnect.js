// frontend/src/app/components/WalletConnect.js
'use client';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const WalletConnect = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const checkWalletConnected = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        }
      }
    };

    checkWalletConnected();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAddress(accounts[0]);
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  return (
    <>
      {address ? (
        <span className="text-primary-content">{address}</span>
      ) : (
        <button onClick={connectWallet} className="btn btn-primary">Connect Wallet</button>
      )}
    </>
  );
};

export default WalletConnect;
