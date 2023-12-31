import { useEffect, useRef } from 'react';

interface Props {
  open?: boolean;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  status: string;
  creation_date: string;
  last_modification_date: string;
}

export default function ModalView({
  open,
  firstName,
  lastName,
  role,
  email,
  status,
  creation_date,
  last_modification_date,
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
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>
          {firstName} {lastName}
        </h3>
        <hr className='w-full border-gray-300 ' />

        <div className='flex'>
          <div className='flex-col text-left  my-2 ml-3'>
            <small className='text-gray-400 tracking-wider'>Cargo</small>
            <p className='text-left text-lg font-semibold mr-3'>{role}</p>
            <small className='text-gray-400 tracking-wider'>Status</small>
            <p className='text-left text-lg font-semibold mr-3'>{status}</p>
          </div>

          <div className='flex-col text-left ml-auto mr-4'>
            <small className='text-gray-400 tracking-wider'>Email</small>
            <p className='text-left text-lg font-semibold '>{email}</p>
            <small className='text-gray-400 tracking-wider'>Data de Criação</small>
            <p className='text-left text-lg font-semibold'>{creation_date}</p>
            <small className='text-gray-400 tracking-wider'>Data da Ultima Alteração</small>
            <p className='text-left text-lg font-semibold ml-auto'>{last_modification_date}</p>
          </div>
        </div>
      </div>

      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
