import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import Modal from 'react-modal';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      {open && (
        <Modal
          className='max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] border-2 bg-white rounded-md shadow-md focus:outline-none'
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className='flex flex-col justify-center items-center'>
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
}
