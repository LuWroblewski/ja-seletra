interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <div className='absolute p-4 z-10  bg-red-600 w-8/12 border-l top-10 rounded-e-2xl text-2xl font-bold font-fontPrincipal border-white ml-auto'>
      <h1 className='text-white ml-16'>{title}</h1>
    </div>
  );
}
