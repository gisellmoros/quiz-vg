import {QuizProvider} from 'context/quiz';

function App() {

  const quizProviderValues = {

  }
  return (
    <QuizProvider value={quizProviderValues}>
      App
    </QuizProvider>
  );
}

export default App;
