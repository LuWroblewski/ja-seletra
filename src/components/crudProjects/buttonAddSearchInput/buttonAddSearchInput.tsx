'use client';

import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import ModalFormUser from '../modalFormUser/ModalFormUser';

export default function ButtonAddSearchInput() {
  const [modal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className='flex justify-start ml-24 mb-4'>
        <button className='btn btn-circle' onClick={modalOpen}>
          <AiOutlineUserAdd className='text-xl' />
        </button>
        <input
          type='text'
          placeholder='Pesquise projeto '
          className='input input-bordered w-full max-w-xs ml-4 text-black '
        />
      </div>
      <div className='text-black text-left'>
        <ModalFormUser
          open={modal}
          title={'Adicionar Projeto'}
          firstName={''}
          lastName={''}
          password={''}
          confirm_password={''}
          role={''}
          email={''}
          status={''}
          creation_date={''}
          last_modification_date={''}
        />
      </div>
    </div>
  );
}
