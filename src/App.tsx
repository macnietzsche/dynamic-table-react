import DynamicTable from './DynamicTable';
import { data } from './DynamicTable/constants';
const App: React.FC = () => {
  return (
    <div>
      <h1>Awesome Dynamic Table</h1>
      <DynamicTable data={data} />
    </div>
  );
};

export default App;
