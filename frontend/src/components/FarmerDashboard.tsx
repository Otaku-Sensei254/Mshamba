import React, { useState } from 'react';
import SetupInvestmentModal from './SetupInvestmentModal';

interface FarmerDashboardProps {
  onLogout: () => void;
}

const FarmerDashboard: React.FC<FarmerDashboardProps> = ({ onLogout }) => {
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  const [investmentLaunched, setInvestmentLaunched] = useState(false); // Simulate approval
  const [shareLink, setShareLink] = useState<string | null>(null);

  const handleCreateFarm = () => {
    alert("Navigate to Farm Creation Form");
    // In a real app, this would navigate to a farm creation form
  };

  const handleSetupInvestment = () => {
    setShowInvestmentModal(true);
  };

  const handleCloseInvestmentModal = () => {
    setShowInvestmentModal(false);
  };

  const handleLaunchInvestment = () => {
    // In a real app, this would interact with the blockchain to launch the investment
    alert("Investment Launched!");
    setInvestmentLaunched(true);
    setShareLink(`https://mshamba.app/invest/${Math.random().toString(36).substring(7)}`); // Placeholder link
  };

  const handleShareInvestment = () => {
    if (shareLink) {
      navigator.clipboard.writeText(shareLink);
      alert(`Share link copied to clipboard: ${shareLink}`);
    }
  };

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <p>Welcome, Farmer! Here you can manage your farms.</p>
      <button onClick={handleCreateFarm}>Create New Farm</button>
      <button onClick={handleSetupInvestment}>Setup Investment</button>

      {investmentLaunched ? (
        <>
          <button onClick={handleLaunchInvestment}>Launch Investment</button>
          <button onClick={handleShareInvestment}>Share Investment</button>
          {shareLink && <p>Share this link: {shareLink}</p>}
        </>
      ) : (
        <p>Your investment proposal is awaiting approval.</p>
      )}

      <button onClick={onLogout}>Logout</button>

      {showInvestmentModal && (
        <SetupInvestmentModal onClose={handleCloseInvestmentModal} />
      )}
    </div>
  );
};

export default FarmerDashboard;