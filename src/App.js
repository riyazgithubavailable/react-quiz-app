import React,{useState} from'react';
import './App.css';

const questions = [
  {
    questionText: "What is the capital of France?",
    answeroptions: [
      {answerText:"Paris",isCorrect:true},
     {answerText:"Madrid",isCorrect:false},
      {answerText:"London",isCorrect:false},
      {answerText:"New York",isCorrect:false},
    ],
    
  },
  {
    questionText: "who is the ceo of Tesla?",
    answeroptions: [
      {answerText:"Jeff Bezos",isCorrect:false},
      {answerText:"Elon Musk",isCorrect:true},
       {answerText:"Bill Gates",isCorrect:false},
       {answerText:"Tony Stark",isCorrect:false},
    ],
    
  },
  {
    questionText: "What is the capital of India?",
    answeroptions: [
      {answerText:"Dhaka",isCorrect:false},
      {answerText:"London",isCorrect:false},
       {answerText:"Paris",isCorrect:false},
       {answerText:"Delhi",isCorrect:true},
    ],
   
  },
  {
    questionText: "What is the capital of Afghanistan?",
    answeroptions: [
      {answerText:"Dhaka",isCorrect:false},
      {answerText:"London",isCorrect:false},
       {answerText:"Paris",isCorrect:false},
       {answerText:"Kabul",isCorrect:true},
    ],
    
  },
  {
    questionText: "What is the capital of Pakistan?",
    answeroptions: [
      {answerText:"Mubai",isCorrect:false},
      {answerText:"Karachi",isCorrect:false},
       {answerText:"Delhi",isCorrect:false},
       {answerText:"Islamabad",isCorrect:true},
    ],
    
  },
]
function App() {
 const [currentQuestion,setCurrentQuestion] = useState(0);
 const [answer,setAnswer] = useState(false);
 const [selectedAnswer,setSelectedAnswer] = useState(null);
 const [score,setScore] = useState(0);
 const [showScore,setShowScore] = useState(false);
 const nextQuestion = () => {
   setAnswer(false);
   setSelectedAnswer(null);
   const nextQuestion = currentQuestion + 1;
   if(nextQuestion < questions.length){
     setCurrentQuestion(nextQuestion);
   }else{
     setShowScore(true);
   }
   
 }
 const handleAnswerOption = (index,isCorrect) => {
   setAnswer(true);
   setSelectedAnswer(index);
   if(isCorrect){
     setScore(score + 1);
   }
 }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
        <div className='p-2 border text-center font-bold mb-2 text-xl'>Quiz App</div>
        {showScore ? <div>
          You Scored {score}  of {questions.length}
        </div>: <div>
          <div>{questions[currentQuestion].questionText}</div>
          {questions[currentQuestion].answeroptions.map((option,index) => (
        <button className={`block w-full p-2 mt-2 rounded border ${answer ? option.isCorrect? "bg-green-200" :selectedAnswer === index ? "bg-red-200" :"" :"" }`}
             onClick={()=>handleAnswerOption(index,option.isCorrect)}
            >
              {option.answerText}
              </button>
          ))}
          <button className={`${answer ? "bg-green-500" : "bg-green-300"} block w-full bg-green-500 text-white p-2  rounded border`}
          disabled = {answer ? "" : "disabled"}
          onClick={nextQuestion}
          >
            Next Question
            </button>
          <p className='text-center text-gray-400 text-sm '>Question {currentQuestion + 1} of {questions.length}</p>
        
        </div>
}
      </div>
    </div>
  );
}

export default App;
