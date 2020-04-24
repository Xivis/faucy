import { useEffect } from 'react';

const useUserAddress = (web3Provider, setUserAddress) => {
  useEffect(() => {
    if (!web3Provider) return;

    function updateAddress(accounts) {
      if (!accounts.length) return;
      setUserAddress(accounts[0].slice(2));
    }

    web3Provider.provider.enable().then((accounts) => updateAddress(accounts));
    web3Provider.provider.on('accountsChanged', (accounts) => updateAddress(accounts));
  }, [web3Provider, setUserAddress]);
};

export { useUserAddress };
