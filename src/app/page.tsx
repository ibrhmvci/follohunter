"use client";
import React from 'react';
import styles from '../styles/Home.module.scss';
import { signIn } from 'next-auth/react';

const Home = () => {
  const handleLogin = () => {
    signIn('instagram');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to FolloHunter</h1>
      <p className="mt-4 text-lg text-gray-600">
        Track your Instagram followers and see who follows you back!
      </p>
      <button onClick={handleLogin} className={styles.customButton}>
        Login with Instagram
      </button>
    </div>
  );
};

export default Home;
