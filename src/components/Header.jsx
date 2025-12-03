import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="myHeader">
      <FaHome
        onClick={() => navigate("/")}
        className="home-icon"
        size={40}
      />
    </header>
  );
};
