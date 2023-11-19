import Options from '../options/options';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

export default function Table() {
  return (
    <div className='justify-center w-11/12 ml-20 h-auto  text-center text-black shadow-xl'>
      <div className='h-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Número do Equipamento</th>
              <th>Porcentagem de Conclusão</th>
              <th>Liberado</th>
              <th>Data de Assinatura</th>
              <th>Assinatura liberação</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X</td>
              <td>1</td>
              <td>25%</td>
              <td className='flex items-center'>
                <div
                  className='
                     bg-red-400
                      w-2 h-2 rounded-full mr-2 mt-1'
                ></div>
                não
              </td>
              <td> - - </td>
              <td> - - </td>
              <td>
                <Options
                  project={'X'}
                  equipmentNumber={'1'}
                  completionPercentage={'25%'}
                  released={'não'}
                  signatureDate={''}
                  releaseSignature={''}
                  creation_date={'15/02/2023'}
                  last_modification_date={'07/03/2023'}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=' bg-gray-100 w-full flex justify-center items-center space-x-3 py-1'>
        <p className='hover:text-gray-400'>
          <BiSolidLeftArrow />
        </p>
        <p className=' text-sm'> 1 - 1 </p>
        <p>
          <BiSolidRightArrow className='hover:text-gray-400' />
        </p>
      </div>
    </div>
  );
}
