import { Contract, ethers } from 'ethers';
import React, { createContext, useContext, useState } from 'react';
import { ABI, CONTRACT_ADDRESS } from '../env/CONSTANTS';

interface IAppState {
  contract: ethers.Contract;
  code?: string;
  result?: string | null;
}

const AppStateContext = createContext<{
  state: IAppState;
  setState: (state: IAppState) => void;
} | null>(null);

export const useAppState = () => useContext(AppStateContext);

export const AppStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<IAppState>({
    code: '',
    result: null,
    //@ts-ignore
    contract: new Contract(
      CONTRACT_ADDRESS,
      ABI,
      // @ts-ignore
      new ethers.providers.Web3Provider(window.ethereum)
    ),
  });
  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
};
