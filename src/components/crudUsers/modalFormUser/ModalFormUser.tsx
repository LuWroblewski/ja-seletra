import { useEffect, useRef } from 'react';

interface Props {
  open?: boolean;
  title?: string;
  firstName: string;
  lastName: string;
  password: string;
  confirm_password: string;
  role: string;
  email: string;
  status: string;
  creation_date: string;
  last_modification_date: string;
}

export default function ModalFormUser({
  open,
  title,
  firstName,
  lastName,
  password,
  confirm_password,
  role,
  email,
  status,
}: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      if (open) {
        modalRef.current.showModal();
      } else {
        modalRef.current.close();
      }
    }
  }, [open]);

  return (
    <dialog ref={modalRef} className='modal'>
      <div className='modal-box w-3/12'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <hr className='w-full border-gray-300 ' />

        <div className='mt-2 '>
          <div className='flex flex-col my-2'>
            <p className=' text-lg ml-3'>Nome</p>
            <input
              type='text'
              placeholder='Nome'
              defaultValue={firstName || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>

          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Sobrenome</p>
            <input
              type='text'
              placeholder='Sobrenome'
              defaultValue={lastName || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>

          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Email</p>
            <input
              type='text'
              placeholder='Email'
              defaultValue={email || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>

          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Cargo</p>
            <input
              type='text'
              placeholder='Cargo'
              defaultValue={role || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>

          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Cargo</p>
            <select className='select select-sm select-bordered w-full max-w-xs' defaultValue={status || ''}>
              <option disabled selected>
                Status
              </option>
              <option>Ativo</option>
              <option>Inativo</option>
            </select>
          </div>

          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Senha</p>
            <input
              type='password'
              placeholder='Senha'
              defaultValue={password || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>

          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Confirmação de senha</p>
            <input
              type='password'
              defaultValue={confirm_password || ''}
              placeholder='Confirmação de senha'
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>
        </div>

        <div className='flex justify-end'>
          <button className='btn btn-sm btn-outline btn-info '>Enviar</button>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
