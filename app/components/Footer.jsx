import React from 'react';
import ShareButtons from '@/app/components/ShareButtons';

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-gray-200 text-white text-center py-4 flex justify-center items-center" >
              <ShareButtons url={"https://www.botaodofodase.com.br"} text={"tenha uma vida mais simples"}/>

    </footer>
  );
};

export default Footer;
