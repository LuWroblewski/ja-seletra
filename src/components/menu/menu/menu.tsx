import RedirectButtons from '../redirectButtons/redirectButtons';

export default function Menu() {
  return (
    <div className='absolute flex  justify-center w-full h-auto top-32 text-center'>
      <div className=' flex flex-wrap justify-center w-8/12 lg:w-8/12 xl:w-6/12 '>
        <RedirectButtons title={'Projetos'} link={''} />
        <RedirectButtons title={'Painel de Gerenciamento'} link={'painelGerenciamento'} />
      </div>
    </div>
  );
}
