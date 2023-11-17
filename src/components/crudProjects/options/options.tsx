'use client';

import { useState } from 'react';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoEyeSharp } from 'react-icons/io5';
import { ImPencil } from 'react-icons/im';
import { AiOutlineUserDelete } from 'react-icons/ai';
import ModalView from '../modalView/modalview';
import ModalDel from '../modalDel/modalDel';
import ModalFormUser from '../modalFormUser/ModalFormUser';

interface Props {
  project: string;
  equipmentNumber: string;
  completionPercentage: string;
  released: string;
  signatureDate: string;
  releaseSignature: string;
  creation_date: string;
  last_modification_date: string;
}

export default function Options({
  project,
  equipmentNumber,
  completionPercentage,
  released,
  signatureDate,
  releaseSignature,
  creation_date,
  last_modification_date,
}: Props) {
  const [menu, setMenu] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDel, setModalDel] = useState(false);
  const isClickable = !signatureDate && !releaseSignature;

  const handleClick = () => {
    setMenu(!menu);

    setTimeout(() => {
      setMenu(false);
    }, 3000);
  };

  const viewModal = () => {
    setModalView(!modalView);
  };

  const updateModal = () => {
    setModalUpdate(!modalUpdate);
  };

  const delModal = () => {
    setModalDel(!modalDel);
  };

  return (
    <div>
      <div className='flex items-start'>
        {menu && (
          <div className='bg-white shadow-xl border-2 rounded-md w-auto h-auto absolute z-20 -ml-28 space-y-1 p-1 text-sm text-gray-500'>
            <div className='flex items-center text-left p-1 cursor-pointer hover:bg-gray-100' onClick={viewModal}>
              <p>
                <IoEyeSharp />
              </p>
              <p className='ml-2'>View</p>
            </div>

            <div
              className={`flex items-center text-left p-1 cursor-pointer ${
                isClickable ? 'hover:bg-gray-100' : 'pointer-events-none'
              }`}
              onClick={() => (isClickable ? updateModal : null)}
            >
              <p>
                <ImPencil />
              </p>
              <p className='ml-2'>Edit</p>
            </div>

            <div className='flex items-center text-left p-1 cursor-pointer hover:bg-gray-100' onClick={delModal}>
              <p>
                <AiOutlineUserDelete />
              </p>
              <p className='ml-2'>Delete</p>
            </div>
          </div>
        )}
        <BiDotsVerticalRounded
          className='rounded-full p-1 text-2xl bg-gray-300 text-white hover:bg-gray-400 cursor-pointer'
          onClick={handleClick}
        />
      </div>
      <ModalView
        open={modalView}
        project={project}
        equipmentNumber={equipmentNumber}
        completionPercentage={completionPercentage}
        released={released}
        signatureDate={signatureDate}
        releaseSignature={releaseSignature}
        creation_date={creation_date}
        last_modification_date={last_modification_date}
      />
      <ModalFormUser
        open={modalUpdate}
        title={'Editar Projeto'}
        project={project}
        equipmentNumber={equipmentNumber}
        released={released}
        signatureDate={signatureDate}
        releaseSignature={releaseSignature}
      />
      <ModalDel open={modalDel} />
    </div>
  );
}
