import RedirectButtons from '../redirectButtons/redirectButtons';

export default function Menu() {
  return (
    <div className='absolute flex  justify-center w-full h-auto top-32 text-center'>
      <div className=' flex flex-wrap justify-center  w-6/12'>
        <RedirectButtons title={'Checklist AGV'} link={'menu'} />
        <RedirectButtons title={'Checklist Chassi'} link={''} />
        <RedirectButtons title={'Checklist Peças Recebidas'} link={''} />
        <RedirectButtons title={'Checklist Montagem'} link={''} />
        <RedirectButtons title={'Projetos'} link={''} />
        <RedirectButtons title={'Painel de Gerenciamento'} link={'painelGerenciamento'} />
      </div>
    </div>
  );
}
