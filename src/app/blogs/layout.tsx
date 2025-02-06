// import { metadata } from './page';
import React from 'react';

export const metadata = {
  title: "MSA-Academy | Dashboard",
  description:
    "MSA-Academy | Dashboard",
};
interface SettingsLayoutProps {
    children: React.ReactNode; // Explicitly define the type for children
  }

  const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
    return <div className='taimoor__'>{children}</div>;
  };
  
  export default SettingsLayout;


  