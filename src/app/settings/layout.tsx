// import { metadata } from './page';
import React from 'react';

export const metadata = {
  title: "Next.js Settings | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Settings page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
interface SettingsLayoutProps {
    children: React.ReactNode; // Explicitly define the type for children
  }

  const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
    return <div>{children}</div>;
  };
  
  export default SettingsLayout;