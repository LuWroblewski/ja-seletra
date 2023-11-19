import Image from 'next/image';
import selettra_logo from '../images/selettra-logo.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='hero min-h-screen bg-bg-login'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div>
            <Image src={selettra_logo} alt='login' className='' />
          </div>
          <p className='text-black w-full text-center text-2xl font-semibold'>LOGIN</p>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='email' placeholder='email' className='input input-bordered text-black' required />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Senha</span>
              </label>
              <input type='password' placeholder='senha' className='input input-bordered text-black' required />
            </div>
            <Link href='menu' className='hover:text-white'>
              <div className='form-control mt-6'>
                <button className='btn text-white bg-red-800 hover:bg-red-600 '>Login</button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
