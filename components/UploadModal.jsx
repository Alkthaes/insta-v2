import React from 'react';
import { BsTypeH1 } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return <div>{open && <h1>The Modal is open</h1>}</div>;
}
