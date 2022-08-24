import React, {ReactNode} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  children: ReactNode;
}

function Layout({children}: Props) {
  return (
    <div className="flex flex-1 flex-col justify-center items-center h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
