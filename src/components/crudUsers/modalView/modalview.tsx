import { useEffect, useRef } from 'react';

interface Props {
  open?: boolean;
  nome: string;
  sobrenome: string;
  cargo: string;
  email: string;
  status: string;
  data_criacao: string;
  data_ultima_alteracao: string;
}

export default function ModalView({
  open,
  nome,
  sobrenome,
  cargo,
  email,
  status,
  data_criacao,
  data_ultima_alteracao,
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
          {nome} {sobrenome}
        </h3>
        <hr className='w-full border-gray-300 ' />

        <div className='flex'>
          <div className='flex-col text-left  my-2 ml-3'>
            <small className='text-gray-400 tracking-wider'>Cargo</small>
            <p className='text-left text-lg font-semibold mr-3'>{cargo}</p>
            <small className='text-gray-400 tracking-wider'>Status</small>
            <p className='text-left text-lg font-semibold mr-3'>{status}</p>
          </div>

          <div className='flex-col text-left ml-auto mr-4'>
            <small className='text-gray-400 tracking-wider'>Email</small>
            <p className='text-left text-lg font-semibold '>{email}</p>
            <small className='text-gray-400 tracking-wider'>Data de Criação</small>
            <p className='text-left text-lg font-semibold'>{data_criacao}</p>
            <small className='text-gray-400 tracking-wider'>Data da Ultima Alteração</small>
            <p className='text-left text-lg font-semibold ml-auto'>{data_ultima_alteracao}</p>
          </div>
        </div>
      </div>

      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
