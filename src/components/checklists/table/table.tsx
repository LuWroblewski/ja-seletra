import Card from '../card/card';

export default function Table() {
  return (
    <div className='justify-center w-11/12 ml-20 h-auto text-black  text-center  p-1'>
      <div className=' space-y-4'>
        <Card title='Elétrica' result='Aprovado!' />
        <Card title='Conjunto Tração' result='Reprovado!' />
      </div>
    </div>
  );
}
