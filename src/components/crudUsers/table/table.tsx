import Options from '../options/options';

export default function Table() {
  return (
    <div className='justify-center w-11/12 ml-20 h-auto  text-center text-black'>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
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
              <td>inativo</td>
              <td>
                <Options />
              </td>
            </tr>

            <tr>
              <td>Camila</td>
              <td>Costa</td>
              <td>admin</td>
              <td>camila@example.com</td>
              <td>ativo</td>
              <td>
                <Options />
              </td>
            </tr>

            <tr>
              <td>Lucas</td>
              <td>Souza</td>
              <td>colab</td>
              <td>lucas@example.com</td>
              <td>inativo</td>
              <td>
                <Options />
              </td>
            </tr>

            <tr>
              <td>Maria</td>
              <td>Almeida</td>
              <td>colab</td>
              <td>maria@example.com</td>
              <td>ativo</td>
              <td>
                <Options />
              </td>
            </tr>

            <tr>
              <td>Fernanda</td>
              <td>Santos</td>
              <td>admin</td>
              <td>fernanda@example.com</td>
              <td>ativo</td>
              <td>
                <Options />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
