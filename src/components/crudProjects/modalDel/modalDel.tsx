import { useEffect, useRef } from 'react';

interface Props {
  open?: boolean;
}

export default function ModalDel({ open }: Props) {
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
        <h3 className='font-bold text-lg text-center'>Você tem certeza que deseja desativar esse usuário? </h3>
        <hr className='w-full border-gray-300 ' />

        <div className='my-2 w-full text-center text-base'>
          <p> Se sim clique no botão</p>
          <p> Se não, clique fora da tela</p>
        </div>
        <div className='flex space-x-8 justify-center'>
          <button className='btn btn-outline bg-red-600 text-white hover:bg-red-500 '>Desativar</button>
        </div>
      </div>

      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
