import DynamicTable from './DynamicTable';
import { data } from './DynamicTable/constants';
const App: React.FC = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center container mx-auto'>
      <h1 className='text-3xl my-5 font-bold'>Awesome Dynamic Table</h1>
      <div className='overflow-x-auto w-full'>
        <DynamicTable data={data} />
      </div>
    </div>
  );
};

export default App;
