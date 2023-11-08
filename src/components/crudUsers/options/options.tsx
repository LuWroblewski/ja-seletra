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
  nome: string;
  sobrenome: string;
  cargo: string;
  email: string;
  status: string;
  data_criacao: string;
  data_ultima_alteracao: string;
}

export default function Options({ nome, sobrenome, cargo, email, status, data_criacao, data_ultima_alteracao }: Props) {
  const [menu, setMenu] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDel, setModalDel] = useState(false);

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
          <div className='bg-white shadow-xl border-2  rounded-md w-auto h-auto absolute z-20 -ml-28 space-y-1 p-1 text-sm text-gray-500 '>
            <div className='flex  items-center text-left p-1 cursor-pointer hover:bg-gray-100  ' onClick={viewModal}>
              <p>
                <IoEyeSharp />
              </p>
              <p className='ml-2'>Vizualizar</p>
            </div>

            <div className='flex  items-center text-left p-1 cursor-pointer hover:bg-gray-100  ' onClick={updateModal}>
              <p>
                <ImPencil />
              </p>
              <p className='ml-2'>Editar</p>
            </div>

            <div className='flex  items-center text-left p-1 cursor-pointer hover:bg-gray-100  ' onClick={delModal}>
              <p>
                <AiOutlineUserDelete />
              </p>
              <p className='ml-2'>Deletar</p>
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
        nome={nome}
        sobrenome={sobrenome}
        cargo={cargo}
        email={email}
        status={status}
        data_criacao={data_criacao}
        data_ultima_alteracao={data_ultima_alteracao}
      />
      <ModalFormUser open={modalUpdate} title={'Editar usuário'} />
      <ModalDel open={modalDel} />
    </div>
  );
}
