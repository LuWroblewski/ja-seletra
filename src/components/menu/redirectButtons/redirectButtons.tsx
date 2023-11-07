import Link from 'next/link';

interface Props {
  title: string;
  link: string;
}

export default function RedirectButtons({ title, link }: Props) {
  return (
    <div className='text-gray-500  font-semibold   p-8 w-80 h-auto shadow-lg m-4'>
      <p className='text-2xl mb-8'>{title}</p>
      <Link href={`/${link}`} className='hover:text-white'>
        <button className='btn btn-outline btn-warning '>Entrar</button>
      </Link>
    </div>
  );
}
