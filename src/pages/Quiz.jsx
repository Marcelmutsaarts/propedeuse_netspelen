import { useState } from 'react'
import { quizQuestions, volleyStarsLevels, smashballInfo } from '../data/volleyData'
import useStore from '../store/useStore'
import { CheckCircle, XCircle, Award, RefreshCw, ArrowRight } from 'lucide-react'

function Quiz() {
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  
  const { saveQuizScore, getQuizScore } = useStore()

  const availableQuizzes = [
    ...volleyStarsLevels.map(level => ({
      id: level.id,
      name: level.name,
      icon: level.icon,
      questions: quizQuestions[level.id] || []
    })),
    {
      id: 'smashball',
      name: smashballInfo.name,
      icon: smashballInfo.icon,
      questions: quizQuestions.smashball || []
    }
  ]

  const startQuiz = (levelId) => {
    setSelectedLevel(levelId)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizComplete(false)
  }

  const currentQuiz = availableQuizzes.find(q => q.id === selectedLevel)
  const currentQuestion = currentQuiz?.questions[currentQuestionIndex]

  const handleAnswer = (answerIndex) => {
    if (showResult) return
    
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      completeQuiz()
    }
  }

  const completeQuiz = () => {
    const finalScore = Math.round((score / currentQuiz.questions.length) * 100)
    saveQuizScore(selectedLevel, finalScore)
    setQuizComplete(true)
  }

  const resetQuiz = () => {
    setSelectedLevel(null)
    setQuizComplete(false)
  }

  if (!selectedLevel) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Quiz</h1>
          <p className="text-gray-600 mb-6">
            Test je kennis over de verschillende levels en methodieken. 
            Kies een onderwerp om te beginnen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {availableQuizzes.map((quiz) => {
            const previousScore = getQuizScore(quiz.id)
            return (
              <button
                key={quiz.id}
                onClick={() => startQuiz(quiz.id)}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-left group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{quiz.icon}</span>
                    <h3 className="text-lg font-semibold group-hover:text-orange-600 transition-colors">
                      {quiz.name}
                    </h3>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-orange-600 transition-colors" />
                </div>
                
                <p className="text-sm text-gray-600 mb-3">
                  {quiz.questions.length} vragen
                </p>
                
                {previousScore && (
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Beste score:</span>
                      <span className="font-semibold text-green-600">{previousScore.score}%</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Pogingen: {previousScore.attempts}
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  if (quizComplete) {
    const finalScore = Math.round((score / currentQuiz.questions.length) * 100)
    const previousScore = getQuizScore(selectedLevel)
    
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            {finalScore >= 75 ? (
              <Award size={64} className="text-yellow-500 mx-auto mb-4" />
            ) : (
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
            )}
            
            <h2 className="text-2xl font-bold mb-2">Quiz voltooid!</h2>
            <p className="text-gray-600 mb-4">{currentQuiz.name}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {finalScore}%
            </div>
            <p className="text-gray-700">
              {score} van {currentQuiz.questions.length} vragen correct
            </p>
            
            {previousScore && previousScore.score < finalScore && (
              <p className="text-green-600 mt-2">
                🎉 Nieuw persoonlijk record!
              </p>
            )}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => startQuiz(selectedLevel)}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
            >
              <RefreshCw size={18} />
              Opnieuw proberen
            </button>
            <button
              onClick={resetQuiz}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Andere quiz kiezen
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-2xl">{currentQuiz.icon}</span>
              {currentQuiz.name}
            </h2>
            <span className="text-sm text-gray-600">
              Vraag {currentQuestionIndex + 1} / {currentQuiz.questions.length}
            </span>
          </div>
          
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
          
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.correctAnswer
              const isSelected = index === selectedAnswer
              
              let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all '
              
              if (showResult) {
                if (isCorrect) {
                  buttonClass += 'border-green-500 bg-green-50'
                } else if (isSelected && !isCorrect) {
                  buttonClass += 'border-red-500 bg-red-50'
                } else {
                  buttonClass += 'border-gray-200 bg-gray-50'
                }
              } else {
                buttonClass += 'border-gray-200 hover:border-orange-300 hover:bg-orange-50 cursor-pointer'
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && (
                      <>
                        {isCorrect && <CheckCircle className="text-green-600" size={20} />}
                        {isSelected && !isCorrect && <XCircle className="text-red-600" size={20} />}
                      </>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {showResult && (
          <div className="mb-6">
            <div className={`p-4 rounded-lg ${
              selectedAnswer === currentQuestion.correctAnswer 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-blue-50 border border-blue-200'
            }`}>
              <p className="text-sm">
                {selectedAnswer === currentQuestion.correctAnswer ? '✅ Correct! ' : '💡 '}
                {currentQuestion.explanation}
              </p>
            </div>
          </div>
        )}

        {showResult && (
          <button
            onClick={nextQuestion}
            className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
          >
            {currentQuestionIndex < currentQuiz.questions.length - 1 ? (
              <>
                Volgende vraag
                <ArrowRight size={18} />
              </>
            ) : (
              <>
                Quiz afronden
                <CheckCircle size={18} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default Quiz