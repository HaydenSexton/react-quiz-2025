import { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Score from './components/Score';

const quizQuestions = [
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in a functional component",
      "To handle side effects",
      "To perform HTTP requests",
      "To create a new component"
    ],
    answer: "To manage state in a functional component"
  },
  {
    question: "What does JSX stand for?",
    options: [      
      "JavaScript",
      "JavaScript XML",
      "Java Styling Extension",
      "JavaScript Syntax Expression"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to handle side effects in functional components?",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    answer: "useEffect"
  },  
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
  };

  return (
    <div className="quiz-app">     
      {showScore ? (
        <Score score={score} totalQuestions={quizQuestions.length} handleRestartQuiz={handleRestartQuiz} />
      ) : (
        <Question
          questionData={quizQuestions[currentQuestion]}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
          totalQuestions={quizQuestions.length}
        />
      )}
    </div>
  );
};

export default App;
