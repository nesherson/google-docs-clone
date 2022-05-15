import { useState } from 'react';

import Modal from './modal';

export default function Docs() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div className='docs-main'>
      <h1>Docs Clone</h1>
      <button className='add-docs' onClick={handleOpen}>
        Add a Document
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
