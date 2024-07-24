// frontend/src/app/pages/profile/page.js
'use client';

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const ProfilePage = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch (error) {
        console.error('User denied account access');
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const balance = await web3.eth.getBalance(accounts[0]);
    setBalance(web3.utils.fromWei(balance, 'ether'));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <p><strong>Wallet Address:</strong> {account}</p>
        <p><strong>Balance:</strong> {balance} ETH</p>
      </div>
    </div>
  );
};

export default ProfilePage;
