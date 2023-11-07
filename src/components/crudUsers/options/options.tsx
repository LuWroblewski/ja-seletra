'use client';

import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoEyeSharp } from 'react-icons/io5';
import { ImPencil } from 'react-icons/im';
import { AiOutlineUserDelete } from 'react-icons/ai';

export default function Options() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className='flex items-start'>
        {menu && (
          <div className='bg-white shadow-xl border-2  rounded-md w-auto h-auto absolute z-20 -ml-28 space-y-1 p-1 text-sm text-gray-500 '>
            <div className='flex  items-center text-left p-1 cursor-pointer hover:bg-gray-100  '>
              <p>
                <IoEyeSharp />
              </p>
              <p className='ml-2'>Vizualizar</p>
            </div>

            <div className='flex  items-center text-left p-1 cursor-pointer hover:bg-gray-100  '>
              <p>
                <ImPencil />
              </p>
              <p className='ml-2'>Editar</p>
            </div>

            <div className='flex  items-center text-left p-1 cursor-pointer hover:bg-gray-100  '>
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
    </div>
  );
}
