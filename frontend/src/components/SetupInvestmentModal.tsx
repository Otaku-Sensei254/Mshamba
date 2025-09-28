import React from 'react';

interface SetupInvestmentModalProps {
  onClose: () => void;
}

const SetupInvestmentModal: React.FC<SetupInvestmentModalProps> = ({ onClose }) => {
  const handleSendEmail = () => {
    const emailAddress = 'agoyamike@gmail.com';
    const subject = 'Mshamba Farm Investment Proposal';
    const body = 'Dear Mshamba Team,\n\nI am submitting my farm\'s financial reports and investment proposal. Please find the attached documents detailing:\n\n1. Farm finances and financial report\n2. What I am raising money for\n3. How much money I need\n\nThank you.\n';
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose(); // Close the modal after opening email client
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Setup Investment</h3>
        <p>To set up an investment for your farm, please submit the following documents via email:</p>
        <ul>
          <li>Your farm\'s financial reports</li>
          <li>Details on what you are raising money for</li>
          <li>The total amount of money you need</li>
        </ul>
        <p>Click the button below to send an email to our team with these details.</p>
        <button onClick={handleSendEmail}>Submit Documents via Email</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SetupInvestmentModal;
