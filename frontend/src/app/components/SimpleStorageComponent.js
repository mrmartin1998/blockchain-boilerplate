'use client';

import React, { useState } from 'react';
import { SimpleStorage } from '../utils/contract';
import web3 from '../utils/web3';

const SimpleStorageComponent = () => {
  const [data, setData] = useState('');
  const [storedData, setStoredData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSet = async () => {
    setLoading(true);
    setError('');
    const accounts = await web3.eth.getAccounts();
    try {
      await SimpleStorage.methods.set(data).send({ from: accounts[0] });
      setData('');
    } catch (err) {
      setError('Error setting data');
      console.error('Error setting data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleGet = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await SimpleStorage.methods.get().call();
      setStoredData(result.toString());
    } catch (err) {
      setError('Error getting data');
      console.error('Error getting data:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="bg-base-100 p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Simple Storage</h1>
        <input
          type="number"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="input input-bordered mb-4 w-full"
          placeholder="Enter a number"
        />
        <button onClick={handleSet} className="btn btn-primary w-full mb-4" disabled={loading}>
          {loading ? 'Setting...' : 'Set Data'}
        </button>
        <button onClick={handleGet} className="btn btn-success w-full mb-4" disabled={loading}>
          {loading ? 'Getting...' : 'Get Data'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {storedData && (
          <div>
            <h2 className="text-xl font-bold">Stored Data:</h2>
            <p>{storedData}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleStorageComponent;
