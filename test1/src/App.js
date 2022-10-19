import { data1, data2, data3 } from './Data/data1';
import { findMaxNumber } from './helper/ findMaxNumber';

function App() {
  return (
    <div>
      <h1>Đáp án câu 1 là : {findMaxNumber(data1)}</h1>
      <h1>Đáp án câu 2 là : {findMaxNumber(data2)}</h1>
      <h1>Đáp án câu 3 là : {findMaxNumber(data3)}</h1>
    </div>
  );
}

export default App;
