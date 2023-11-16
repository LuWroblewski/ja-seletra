import { useEffect, useRef } from 'react';

interface Props {
  open?: boolean;
  project: string;
  equipmentNumber: string;
  completionPercentage: string;
  released: string;
  signatureDate: string;
  releaseSignature: string;
  creation_date: string;
  last_modification_date: string;
}

export default function ModalView({
  open,
  project,
  equipmentNumber,
  completionPercentage,
  released,
  signatureDate,
  releaseSignature,
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
        <h3 className='font-bold text-lg'>{project}</h3>
        <hr className='w-full border-gray-300 ' />

        <div className='flex'>
          <div className='flex-col text-left  my-2 ml-3'>
            <small className='text-gray-400 tracking-wider'>Número do Equipamento</small>
            <p className='text-left text-lg font-semibold mr-3'>{equipmentNumber}</p>
            <small className='text-gray-400 tracking-wider'>Porcetagem de Conclusão</small>
            <p className='text-left text-lg font-semibold mr-3'>{completionPercentage}</p>
            <small className='text-gray-400 tracking-wider'>Assinatura Liberação</small>
            <p className='text-left text-lg font-semibold '>{releaseSignature}</p>
            <small className='text-gray-400 tracking-wider'>Data da Assinatura</small>
            <p className='text-left text-lg font-semibold '>{signatureDate}</p>
          </div>

          <div className='flex-col text-left ml-auto mr-4'>
            <small className='text-gray-400 tracking-wider'>Liberado?</small>
            <p className='text-left text-lg font-semibold '>{released}</p>
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
