// src/context/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users] = useState([
    { 
      id: 1, 
      name: "afreen", 
      email: "afreenh@example.com", 
      phone: "123-456-7890", 
      address: "123 Main St, Cityville" 
    },
    { 
      id: 2, 
      name: "mahi, 
      email: "mahi@example.com", 
      phone: "234-567-8901", 
      address: "456 Elm St, Townsville" 
    },
    { 
      id: 3, 
      name: "madhuri", 
      email: "madhuri@example.com", 
      phone: "345-678-9012", 
      address: "789 Oak St, Villagetown" 
    },
  ]);

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
};
