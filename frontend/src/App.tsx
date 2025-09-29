import React, { useState } from 'react';
import './App.css';
import { ConnectButton, useCurrentWallet } from '@mysten/dapp-kit';
import FarmerDashboard from './components/FarmerDashboard';

function App() {
  const { isConnected, currentAccount } = useCurrentWallet();
  const [role, setRole] = useState<string | null>(null);

  const handleRoleSelection = (selectedRole: string) => {
    setRole(selectedRole);
  };

  const handleLogout = () => {
    setRole(null);
    // In a real app, you might also disconnect the wallet here if desired
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Mshamba DApp</h1>
          {!isConnected ? (
            <>
              <p>Connect your Sui Wallet to get started</p>
              <ConnectButton />
            </>
          ) : (
            <>
              <p>Wallet Connected: {currentAccount?.address}</p>
              {!role ? (
                <>
                  <p>Select your role:</p>
                  <button onClick={() => handleRoleSelection('farmer')}>I am a Farmer</button>
                  <button onClick={() => handleRoleSelection('investor')}>I am an Investor</button>
                </>
              ) : (
                <>
                  {role === 'farmer' && (
                    <FarmerDashboard onLogout={handleLogout} />
                  )}
                  {role === 'investor' && (
                    <div>
                      <h2>Investor Dashboard</h2>
                      <p>Welcome, Investor! Discover investment opportunities.</p>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;