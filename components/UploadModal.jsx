import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import Modal from 'react-modal';
import { BsCamera } from 'react-icons/bs';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);

  function addImageToPost(event) {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  return (
    <div>
      {open && (
        <Modal
          className='max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] border-2 bg-white rounded-md shadow-md focus:outline-none'
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className='flex flex-col justify-center items-center h-[100%]'>
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt='Image to upload'
                className='w-full max-h-[250px] object-cover cursor-pointer'
              ></img>
            ) : (
              <BsCamera
                onClick={() => filePickerRef.current.click()}
                className='cursor-pointer text-5xl bg-red-200 p-2 rounded-full border-2 text-red-500'
              />
            )}

            <input
              type='file'
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type='text'
              maxLength='150'
              placeholder='Please enter your caption...'
              className='m-4 border-none text-center w-full focus:ring-0'
            />
            <button
              disabled
              className='w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100'
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
