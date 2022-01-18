import React from 'react';


export interface IUserInfo {
    loggedIn: false;
    name: string;
    setUserState: (name) => void;
  }
  
  export const UserContext = React.createContext<IUserInfo>({} as any)