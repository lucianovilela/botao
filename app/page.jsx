"use client"
//import Image from "next/image";
import React from 'react';


import DialogBox from '@/app/components/DialogBox';

const Botao = ({ clickHandle }) => {

  return (
    <div>
      
      <button className="btn-redondo-volume" onClick={clickHandle}>
      Foda-se
      </button>
    </div>
  );
};
const Main = () => {
  const [frase, setFrase] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const clickHandle = async () => {
    const f = await (await fetch('/api')).json()
    setFrase(f.message);
    openDialog();
  };
  return (
    <div className="container">
      <div style={{ marginBotton: '4px' }}>
        <Botao clickHandle={clickHandle} />
      </div>
      <DialogBox isOpen={isDialogOpen} onClose={closeDialog} title="Vida minimalista">
        <p>{frase}</p>
      </DialogBox>
    </div>
  );
};



export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Main />
    </div>
  );
}
