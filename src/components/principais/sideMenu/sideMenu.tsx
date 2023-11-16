import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { RiAdminLine, RiHomeGearLine } from 'react-icons/ri';

export default function SideMenu() {
  return (
    <div className='fixed drawer h-screen w-16 p-2 bg-red-800 z-50 '>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content '>
        <label
          htmlFor='my-drawer'
          className='btn btn-primary drawer-button bg-base-100 border-base-100 hover:bg-gray-100 hover:border-gray-200'
        >
          <GiHamburgerMenu className='  text-red-800 ' />
        </label>

        <ul className='menu py-4 px-1 w-auto min-h-full bg-red-800 text-white space-y-2 '>
          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/menu' className='hover:text-white'>
              <p>
                <AiOutlineHome />
              </p>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/checklistAGV' className='hover:text-white'>
              <p>
                <HiOutlineClipboardList />
              </p>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/checklistPeças' className='hover:text-white'>
              <p>
                <HiOutlineClipboardList />
              </p>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/checklistChassi' className='hover:text-white'>
              <p>
                <HiOutlineClipboardList />
              </p>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/checklistMontagem' className='hover:text-white'>
              <p>
                <HiOutlineClipboardList />
              </p>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/painelProjeto' className='hover:text-white'>
              <p>
                <RiHomeGearLine />
              </p>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/painelGerenciamento' className='hover:text-white'>
              <p>
                <RiAdminLine />
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu py-4 px-1 w-48 min-h-full bg-red-800 text-white space-y-2 '>
          <Link href='/me' className='hover:text-white'>
            <li className='hover:bg-red-700 hover:rounded-md mb-8'>
              <p
                className={`flex items-center justify-center ml-2 bg-[#EBD8F0] font-bold h-12 w-12 rounded-full text-3xl hover:text-white`}
              >
                U
              </p>
              <p className='text-center hover:text-white text-xl'>nome do usuario</p>
            </li>
          </Link>

          <li className='hover:bg-red-700 hover:rounded-md '>
            <Link href='/menu' className='hover:text-white'>
              <div className='flex items-center space-x-3 text-lg'>
                <p>
                  <AiOutlineHome />
                </p>
                <p>Home </p>
              </div>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/checklistAGV' className='hover:text-white'>
              <div className='flex items-center space-x-3 text-lg'>
                <p>
                  <HiOutlineClipboardList />
                </p>
                <p>Checklist AGV </p>
              </div>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/checklistPeças' className='hover:text-white'>
              <div className='flex items-center space-x-3 text-lg'>
                <p>
                  <HiOutlineClipboardList />
                </p>
                <p>Checklist Peças Recebidas </p>
              </div>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/checklistChassi' className='hover:text-white'>
              <div className='flex items-center space-x-3 text-lg'>
                <p>
                  <HiOutlineClipboardList />
                </p>
                <p>Checklist Chassi </p>
              </div>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/checklistMontagem' className='hover:text-white'>
              <div className='flex items-center space-x-3 text-lg'>
                <p>
                  <HiOutlineClipboardList />
                </p>
                <p>Checklist Montagem </p>
              </div>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/painelProjeto' className='hover:text-white'>
              <div className='flex items-center space-x-3 text-lg'>
                <p>
                  <RiHomeGearLine />
                </p>
                <p>Painel de Projetos </p>
              </div>
            </Link>
          </li>

          <li className='hover:bg-red-700 hover:rounded-md'>
            <Link href='/painelGerenciamento' className='hover:text-white'>
              <div className='flex items-center space-x-3 text-lg'>
                <p>
                  <RiAdminLine />
                </p>
                <p>Painel de Gerenciamento </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
