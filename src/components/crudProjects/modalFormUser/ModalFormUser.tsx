import { useEffect, useRef } from 'react';

interface Props {
  open?: boolean;
  title?: string;
  project: string;
  equipmentNumber: string;
  released: string;
  signatureDate: string;
  releaseSignature: string;
}

export default function ModalFormUser({
  open,
  title,
  project,
  equipmentNumber,
  released,
  signatureDate,
  releaseSignature,
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
              defaultValue={project || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>
          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Sobrenome</p>
            <input
              type='text'
              placeholder='Sobrenome'
              defaultValue={equipmentNumber || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>
          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Email</p>
            <input
              type='text'
              placeholder='Email'
              defaultValue={released || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>
          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Cargo</p>
            <input
              type='text'
              placeholder='Cargo'
              defaultValue={signatureDate || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>
          <div className='flex flex-col my-2 '>
            <p className=' text-lg ml-3'>Senha</p>
            <input
              type='password'
              placeholder='Senha'
              defaultValue={releaseSignature || ''}
              className='input input-bordered w-full input-sm max-w-xs'
            />
          </div>{' '}
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
