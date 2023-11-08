import Options from '../options/options';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

export default function Table() {
  return (
    <div className='justify-center w-11/12 ml-20 h-full  text-center text-black'>
      <div className='overflow-x-auto h-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Cargo</th>
              <th>Email</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ricardo</td>
              <td>Silva</td>
              <td>colab</td>
              <td>ricardo@example.com</td>
              <td className='flex items-center'>
                <div
                  className='
                     bg-red-400
                      w-2 h-2 rounded-full mr-2 mt-1'
                ></div>
                inativo
              </td>
              <td>
                <Options
                  nome={'Ricardo'}
                  sobrenome={'Silva'}
                  cargo={'colab'}
                  email={'ricardo@example.com'}
                  status={'inativo'}
                  data_criacao={'15/02/2023'}
                  data_ultima_alteracao={'07/03/2023'}
                />
              </td>
            </tr>

            <tr>
              <td>Camila</td>
              <td>Costa</td>
              <td>admin</td>
              <td>camila@example.com</td>
              <td className='flex items-center'>
                <div
                  className='
                     bg-green-400
                      w-2 h-2 rounded-full mr-2 mt-1'
                ></div>
                ativo
              </td>
              <td>
                <Options
                  nome={'Camila'}
                  sobrenome={'Costa'}
                  cargo={'admin'}
                  email={'camila@example.com'}
                  status={'ativo'}
                  data_criacao={'20/04/2023'}
                  data_ultima_alteracao={'20/05/2023'}
                />
              </td>
            </tr>

            <tr>
              <td>Lucas</td>
              <td>Souza</td>
              <td>colab</td>
              <td>lucas@example.com</td>
              <td className='flex items-center'>
                <div
                  className='
                     bg-red-400
                      w-2 h-2 rounded-full mr-2 mt-1'
                ></div>
                inativo
              </td>
              <td>
                <Options
                  nome={'Lucas'}
                  sobrenome={'Souza'}
                  cargo={'colab'}
                  email={'lucas@example.com'}
                  status={'inativo'}
                  data_criacao={'14/08/2023'}
                  data_ultima_alteracao={'29/09/2023'}
                />
              </td>
            </tr>

            <tr>
              <td>Maria</td>
              <td>Almeida</td>
              <td>colab</td>
              <td>maria@example.com</td>
              <td className='flex items-center'>
                <div
                  className='
                     bg-green-400
                      w-2 h-2 rounded-full mr-2 mt-1'
                ></div>
                ativo
              </td>
              <td>
                <Options
                  nome={'Maria'}
                  sobrenome={'Almeida'}
                  cargo={'colab'}
                  email={'maria@example.com'}
                  status={'ativo'}
                  data_criacao={'02/07/2023'}
                  data_ultima_alteracao={'14/08/2023'}
                />
              </td>
            </tr>

            <tr>
              <td>Fernanda</td>
              <td>Santos</td>
              <td>admin</td>
              <td>fernanda@example.com</td>
              <td className='flex items-center'>
                <div
                  className='
                     bg-green-400
                      w-2 h-2 rounded-full mr-2 mt-1'
                ></div>
                ativo
              </td>
              <td>
                <Options
                  nome={'Fernanda'}
                  sobrenome={'Santos'}
                  cargo={'admin'}
                  email={'fernanda@example.com'}
                  status={'ativo'}
                  data_criacao={'05/05/2023'}
                  data_ultima_alteracao={'18/06/2023'}
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
        <p className=' text-sm'> 5 - 5 </p>
        <p>
          <BiSolidRightArrow className='hover:text-gray-400' />
        </p>
      </div>
    </div>
  );
}
