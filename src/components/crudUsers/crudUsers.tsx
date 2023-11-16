import ButtonAddSearchInput from './buttonAddSearchInput/buttonAddSearchInput';
import Table from './table/table';

export default function CrudUsers() {
  return (
    <div className='absolute  w-full h-screen top-32 text-center '>
      <ButtonAddSearchInput />
      <Table />
    </div>
  );
}
