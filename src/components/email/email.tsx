import Image from 'next/image';
import email from '../../images/email.jpg';

export default function Email() {
  return (
    <div className='text-black flex justify-center mt-40'>
      <div className='card w-6/12 card-side bg-base-100 shadow-xl'>
        <figure className='h-full w-96 relative'>
          <Image src={email} alt='email' layout='fill' objectFit='cover' objectPosition='center' />
        </figure>
        <div className='card-body'>
          <h1 className='card-title text-2xl'>Checklist AGV</h1>
          <p>O checklist da sua área está pronto!</p>
          <div className='flex space-x-5'>
            <small className='stat-title text-danger'>Projeto: X </small>
            <small className='stat-title text-danger'>Número do equipamento: 1 </small>
          </div>
          <div className='stats stats-vertical shadow'>
            <div className='stat'>
              <div className='stat-value'>Aprovado: </div>
              <div className='stat-title mt-2 text-primary font-bold'>Montagem</div>
              <div className='stat-desc'> - -</div>
              <div className='stat-title mt-2 text-primary font-bold'>Identificação</div>
              <div className='stat-desc'>Colar melhor as etiquetas</div>
              <div className='stat-title mt-2 text-primary font-bold'>Aspecto</div>
              <div className='stat-desc'> - -</div>
            </div>

            <div className='stat'>
              <div className='stat-value'>Reprovado: </div>
              <div className='stat-title mt-2 text-primary font-bold'>Cartão de memoria no CLP</div>
              <div className='stat-desc'>Mal encaixado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
