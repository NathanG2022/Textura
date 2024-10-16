import logo from './logo.png';
import './App.css';
import QuestionForm from './QuestionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to AI Agent for Neurodivergent!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <QuestionForm />

      </header>
    </div>
  );
}

export default App;
