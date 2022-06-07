import './App.css';
import Header from './Header'

export default function App() {
  return (
    <div id="outer-container" className="absolute top-0 flex justify-center w-full h-full">
      <div id="inner container" className="text-center w-[800px] bg-blue-50">
        <Header />
      </div>
    </div>
  );
};
