import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import Score from './components/Score';
import Footer from './components/Footer';

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
  {
    question: "What are the limitations of React?",
    options: [
      "It's not SEO-friendly",
      "Only works with databases",
      "Cannot be used for mobile apps",
      "Has no support for reusability"
    ],
    answer: "It's not SEO-friendly"
  },
  {
    question: "What is useState() in React?",
    options: [
      "A way to connect components to Redux",
      "A hook for managing side effects",
      "A built-in React hook to manage state",
      "A way to define context providers"
    ],
    answer: "A built-in React hook to manage state"
  },
  {
    question: "What are keys in React?",
    options: [
      "A way to identify uniquely elements in a list",
      "HTML access keys",
      "Props used to pass values",
      "Unique class names for styling"
    ],
    answer: "A way to identify uniquely elements in a list"
  },
  {
    question: "What is JSX?",
    options: [
      "A templating engine",
      "A browser extension",
      "JavaScript XML syntax used in React",
      "A CSS preprocessor"
    ],
    answer: "JavaScript XML syntax used in React"
  },
  {
    question: "What are the differences between functional and class components?",
    options: [
      "Only functional components can use state",
      "Class components are stateless",
      "Functional components are easier and use hooks, class components use lifecycle methods",
      "There are no differences"
    ],
    answer: "Functional components are easier and use hooks, class components use lifecycle methods"
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A concept where a virtual copy of the DOM is kept in memory",
      "A database used by React",
      "An actual browser DOM",
      "A type of cloud-based DOM"
    ],
    answer: "A concept where a virtual copy of the DOM is kept in memory"
  },
  {
    question: "What are props in React?",
    options: [
      "Internal state values",
      "Static assets",
      "Arguments passed into components",
      "Special React components"
    ],
    answer: "Arguments passed into components"
  }
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
      <Header />
      {showScore ? (
        <Score
          score={score}
          totalQuestions={quizQuestions.length}
          handleRestartQuiz={handleRestartQuiz}
        />
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
      <Footer/>
    </div>
  );
};

export default App;
