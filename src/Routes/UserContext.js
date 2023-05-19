import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState('Investor');

  
  const updateUserType = (type) => {
      setUserType(type);
    };
    console.log("Logged",userType)

  return (
    <UserContext.Provider
      value={{
        userType,
        updateUserType}}>
      {children}
    </UserContext.Provider>
  );
};
