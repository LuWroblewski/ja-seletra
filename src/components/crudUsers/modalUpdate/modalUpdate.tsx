import { useEffect, useRef } from 'react';

interface Props {
  open?: boolean;
}

export default function ModalUpdate({ open }: Props) {
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
        <h3 className='font-bold text-lg'>aaaaaaaa</h3>
        <hr className='w-full border-gray-300 ' />
      </div>

      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}
