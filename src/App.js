import './App.css';
import Container from './components/Container';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <div className="back">
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </div>
  );
}

export default App;
