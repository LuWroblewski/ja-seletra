import Table from './table/table';
import { AiOutlineUserAdd } from 'react-icons/ai';

export default function CrudUsers() {
  return (
    <div className='absolute  w-full h-screen top-32 text-center '>
      <div className='flex justify-start ml-24 mb-4'>
        <button className='btn btn-circle'>
          <AiOutlineUserAdd className='text-xl' />
        </button>
        <input
          type='text'
          placeholder='Pesquise usuário '
          className='input input-bordered w-full max-w-xs ml-4 text-black '
        />
      </div>
      <Table />
    </div>
  );
}
