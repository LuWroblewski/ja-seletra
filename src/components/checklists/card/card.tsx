'use client';
import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';

interface Props {
  title?: string;
  result?: string;
}

interface Scores {
  montagem: number;
  identificacao: number;
  aspecto: number;
  cartao: number;
}

interface RadioState {
  montagem: 'success' | 'error' | 'warning';
  identificacao: 'success' | 'error' | 'warning';
  aspecto: 'success' | 'error' | 'warning';
  cartao: 'success' | 'error' | 'warning';
}

type Category = keyof RadioState;

export default function Card({ title, result }: Props) {
  const [scores, setScores] = useState<Scores>({ montagem: 0, identificacao: 0, aspecto: 0, cartao: 0 });
  const [radioState, setRadioState] = useState<RadioState>({
    montagem: 'warning',
    identificacao: 'warning',
    aspecto: 'warning',
    cartao: 'warning',
  });

  const handleRadioClick = (category: Category, value: number, radioType: 'success' | 'error' | 'warning') => {
    setScores((prevScores) => ({
      ...prevScores,
      [category]: radioType === 'success' || radioType === 'warning' ? value : 0,
    }));
    setRadioState((prevRadioState) => ({ ...prevRadioState, [category]: radioType }));
  };

  const totalScore = scores.montagem + scores.identificacao + scores.aspecto + scores.cartao;
  const isApproved = totalScore >= 100;
  const isReproved = totalScore >= 0 || totalScore < 100;

  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title p-4 bg-gray-200 tracking-wider font-bold w-96 justify-center'>{title}</h2>

        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th className=' w-4/12'>
                <div className='flex text-center h-2 space-x-4 mb-4'>
                  <span>Aprovado</span>
                  <div className='text-center'>
                    <span>
                      Não
                      <br />
                      Aprovado
                    </span>
                  </div>
                  <span>NA</span>
                </div>
              </th>
              <th className='w-96'>Observação</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div>
                    <div className='font-bold'>Montagem</div>
                  </div>
                </div>
              </td>
              <td>
                <div className='flex space-x-12'>
                  <input
                    type='radio'
                    name='radio-8-montagem'
                    className='radio radio-success'
                    onClick={() => handleRadioClick('montagem', 25, 'success')}
                  />
                  <input
                    type='radio'
                    name='radio-8-montagem'
                    className='radio radio-error'
                    onClick={() => handleRadioClick('montagem', 1, 'error')}
                  />
                  <input
                    type='radio'
                    name='radio-8-montagem'
                    className='radio radio-warning'
                    onClick={() => handleRadioClick('montagem', 25, 'warning')}
                  />
                </div>
              </td>
              <td>
                <div>
                  <input
                    type='text'
                    placeholder='Escreva a observação...'
                    className='input input-bordered input-accent w-full max-w-xs'
                  />
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div>
                    <div className='font-bold'>identificação</div>
                  </div>
                </div>
              </td>
              <td>
                <div className='flex space-x-12'>
                  <input
                    type='radio'
                    name='radio-8-identificacao'
                    className='radio radio-success'
                    onClick={() => handleRadioClick('identificacao', 25, 'success')}
                  />
                  <input
                    type='radio'
                    name='radio-8-identificacao'
                    className='radio radio-error'
                    onClick={() => handleRadioClick('identificacao', 1, 'error')}
                  />
                  <input
                    type='radio'
                    name='radio-8-identificacao'
                    className='radio radio-warning'
                    onClick={() => handleRadioClick('identificacao', 25, 'warning')}
                  />
                </div>
              </td>
              <td>
                <div>
                  <input
                    type='text'
                    placeholder='Escreva a observação...'
                    className='input input-bordered input-accent w-full max-w-xs'
                  />
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div>
                    <div className='font-bold'>Aspecto</div>
                  </div>
                </div>
              </td>
              <td>
                <div className='flex space-x-12'>
                  <input
                    type='radio'
                    name='radio-8-aspecto'
                    className='radio radio-success'
                    onClick={() => handleRadioClick('aspecto', 25, 'success')}
                  />
                  <input
                    type='radio'
                    name='radio-8-aspecto'
                    className='radio radio-error'
                    onClick={() => handleRadioClick('aspecto', 1, 'error')}
                  />
                  <input
                    type='radio'
                    name='radio-8-aspecto'
                    className='radio radio-warning'
                    onClick={() => handleRadioClick('aspecto', 25, 'warning')}
                  />
                </div>
              </td>
              <td>
                <div>
                  <input
                    type='text'
                    placeholder='Escreva a observação...'
                    className='input input-bordered input-accent w-full max-w-xs'
                  />
                </div>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div>
                    <div className='font-bold'>Cartão de memória no CLP</div>
                  </div>
                </div>
              </td>
              <td>
                <div className='flex space-x-12'>
                  <input
                    type='radio'
                    name='radio-8-cartao'
                    className='radio radio-success'
                    onClick={() => handleRadioClick('cartao', 25, 'success')}
                  />
                  <input
                    type='radio'
                    name='radio-8-cartao'
                    className='radio radio-error'
                    onClick={() => handleRadioClick('cartao', 1, 'error')}
                  />
                  <input
                    type='radio'
                    name='radio-8-cartao'
                    className='radio radio-warning'
                    onClick={() => handleRadioClick('cartao', 25, 'warning')}
                  />
                </div>
              </td>
              <td>
                <div>
                  <input
                    type='text'
                    placeholder='Escreva a observação...'
                    className='input input-bordered input-accent w-full max-w-xs'
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className='flex justify-end'>
          <div className=' space-y-2 '>
            <h2 className='card-title p-4 bg-gray-200 tracking-wider font-bold w-48 ml-auto '>
              Resultado: {totalScore}
            </h2>
            {totalScore !== 0 ? (
              isApproved ? (
                <h2 className='card-title p-1 bg-success tracking-wider font-bold w-48 ml-auto rounded-full justify-center  '>
                  Aprovado!
                </h2>
              ) : isReproved ? (
                <h2 className='card-title p-1 bg-error tracking-wider font-bold w-48 ml-auto rounded-full justify-center'>
                  Reprovado!
                </h2>
              ) : null
            ) : null}
          </div>
          <button className='btn btn-outline btn-primary ml-2 mt-2'>
            <IoMdSend />
          </button>
        </div>
      </div>
    </div>
  );
}
