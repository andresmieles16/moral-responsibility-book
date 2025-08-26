import React, { useState, useEffect } from 'react';

// Componentes de íconos personalizados (sin dependencias externas)
const ChevronLeft = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRight = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const RotateCcw = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1,4 1,10 7,10"></polyline>
    <path d="M3.51,15A9,9,0,0,0,21,12a9,9,0,0,0-9-9,9,9,0,0,0-8.49,6"></path>
  </svg>
);

const Award = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
  </svg>
);

const BookOpen = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const Brain = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.5 2 6 4.5 6 8c0 1 .2 2 .6 2.8C5.8 11.4 5 12.6 5 14c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4 0-1.4-.8-2.6-1.6-3.2C17.8 10 18 9 18 8c0-3.5-2.5-6-6-6z"></path>
    <path d="M12 2v16"></path>
    <path d="M8 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
    <path d="M16 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
  </svg>
);

const Scale = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 11c0-2.5-2-4.5-4.5-4.5S7 8.5 7 11h9z"></path>
    <path d="M7 15s.5 2 4.5 2 4.5-2 4.5-2H7z"></path>
    <path d="M12 3v3"></path>
    <rect x="4" y="20" width="16" height="1"></rect>
  </svg>
);

const Users = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <path d="M20 8v6"></path>
    <path d="M23 11h-6"></path>
  </svg>
);

const Printer = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6,9 6,2 18,2 18,9"></polyline>
    <path d="M6,18H4a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H18"></path>
    <rect x="6" y="14" width="12" height="8"></rect>
  </svg>
);

const Download = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7,10 12,15 17,10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const X = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const bookData = {
  title: "Responsabilidad Moral en Sistemas Autónomos",
  subtitle: "Una guía completa sobre ética y responsabilidad en sistemas inteligentes",
  chapters: [
    {
      id: 'a',
      title: "Fundamentos de la Responsabilidad Moral",
      icon: BookOpen,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-red-700">Fundamentos de la Responsabilidad Moral</h2>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Definición y Conceptos Clave</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          La responsabilidad moral se refiere a la obligación de una entidad de responder por las consecuencias 
          de sus acciones desde una perspectiva ética. En el contexto de los sistemas autónomos, esto plantea 
          interrogantes fundamentales sobre quién debe ser considerado responsable cuando una máquina toma decisiones.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Elementos de la Responsabilidad</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          Para que exista responsabilidad moral, tradicionalmente se requieren tres elementos:
        </p>
        <ul class="list-disc pl-6 mb-4 text-gray-700">
          <li>Agencia: La capacidad de actuar de manera intencional</li>
          <li>Causalidad: Una conexión entre la acción y sus consecuencias</li>
          <li>Control: La habilidad de haber actuado de manera diferente</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Desafíos en Sistemas Autónomos</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          Los sistemas autónomos desafían estos conceptos tradicionales al operar con diferentes grados de 
          independencia y capacidad de decisión. Esto crea un espacio gris en la atribución de responsabilidad 
          que debe ser cuidadosamente analizado.
        </p>
      `,
      quiz: [
        {
          question: "¿Cuáles son los tres elementos tradicionales de la responsabilidad moral?",
          options: ["Agencia, Causalidad, Control", "Intención, Acción, Consecuencia", "Ética, Moral, Justicia", "Autonomía, Libertad, Decisión"],
          correct: 0
        },
        {
          question: "¿Qué desafío principal presentan los sistemas autónomos a la responsabilidad moral tradicional?",
          options: ["Son muy costosos", "Operan con diferentes grados de independencia", "Son difíciles de programar", "Requieren mucha energía"],
          correct: 1
        },
        {
          question: "La responsabilidad moral se refiere a:",
          options: ["Cumplir las leyes", "La obligación de responder por las consecuencias éticas", "Seguir protocolos", "Obedecer órdenes"],
          correct: 1
        },
        {
          question: "¿Por qué es importante el elemento de 'control' en la responsabilidad moral?",
          options: ["Para dominar sistemas", "Para la habilidad de haber actuado diferente", "Para controlar costos", "Para supervisar procesos"],
          correct: 1
        },
        {
          question: "Los sistemas autónomos crean un 'espacio gris' porque:",
          options: ["Son de color gris", "Operan en la oscuridad", "Desafían conceptos tradicionales de responsabilidad", "Son neutros"],
          correct: 2
        }
      ]
    },
    {
      id: 'b',
      title: "Tipos de Sistemas Autónomos",
      icon: Brain,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-red-700">Tipos de Sistemas Autónomos</h2>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Clasificación por Nivel de Autonomía</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          Los sistemas autónomos pueden clasificarse según su grado de independencia en la toma de decisiones:
        </p>
        
        <div class="bg-red-50 p-4 rounded-lg mb-4">
          <h4 class="font-semibold text-red-700 mb-2">Sistemas Semi-Autónomos</h4>
          <p class="text-gray-700">Requieren supervisión humana continua y pueden ser anulados en cualquier momento.</p>
        </div>
        
        <div class="bg-red-100 p-4 rounded-lg mb-4">
          <h4 class="font-semibold text-red-700 mb-2">Sistemas Altamente Autónomos</h4>
          <p class="text-gray-700">Operan independientemente en dominios específicos con mínima intervención humana.</p>
        </div>
        
        <div class="bg-red-200 p-4 rounded-lg mb-4">
          <h4 class="font-semibold text-red-700 mb-2">Sistemas Totalmente Autónomos</h4>
          <p class="text-gray-700">Toman decisiones complejas sin supervisión humana directa.</p>
        </div>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Ejemplos Contemporáneos</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          Desde vehículos autónomos hasta sistemas de trading algorítmico, cada tipo presenta desafíos únicos 
          en términos de responsabilidad moral y ética.
        </p>
      `,
      quiz: [
        {
          question: "¿Cuál es la principal diferencia entre sistemas semi-autónomos y totalmente autónomos?",
          options: ["El costo", "El nivel de supervisión humana requerida", "La velocidad", "El tamaño"],
          correct: 1
        },
        {
          question: "Los sistemas altamente autónomos:",
          options: ["Nunca requieren supervisión", "Operan independientemente en dominios específicos", "Son siempre peligrosos", "No pueden tomar decisiones"],
          correct: 1
        },
        {
          question: "¿Qué caracteriza a los sistemas totalmente autónomos?",
          options: ["Son perfectos", "Toman decisiones complejas sin supervisión directa", "Son muy baratos", "No existen todavía"],
          correct: 1
        },
        {
          question: "¿Por qué es importante clasificar los sistemas por nivel de autonomía?",
          options: ["Para organizar mejor", "Para determinar diferentes niveles de responsabilidad", "Para calcular costos", "Para diseñar interfaces"],
          correct: 1
        },
        {
          question: "¿Cuál es un ejemplo de sistema semi-autónomo?",
          options: ["Un sistema que requiere aprobación humana constante", "Un robot completamente independiente", "Una calculadora", "Un sistema apagado"],
          correct: 0
        }
      ]
    },
    {
      id: 'c',
      title: "Marcos Éticos y Legales",
      icon: Scale,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-red-700">Marcos Éticos y Legales</h2>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Enfoques Éticos Principales</h3>
        
        <div class="grid gap-4 mb-6">
          <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h4 class="font-semibold text-red-700 mb-2">Consecuencialismo</h4>
            <p class="text-gray-700">Evalúa la moralidad de las acciones basándose en sus resultados.</p>
          </div>
          
          <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h4 class="font-semibold text-red-700 mb-2">Deontología</h4>
            <p class="text-gray-700">Se centra en el deber y las reglas, independientemente de las consecuencias.</p>
          </div>
          
          <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500">
            <h4 class="font-semibold text-red-700 mb-2">Ética de la Virtud</h4>
            <p class="text-gray-700">Enfatiza el carácter moral del agente que realiza la acción.</p>
          </div>
        </div>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Marcos Legales Emergentes</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          Los sistemas legales mundiales están desarrollando nuevos marcos para abordar la responsabilidad 
          en sistemas autónomos, incluyendo propuestas de "personalidad jurídica electrónica" y sistemas 
          de seguro obligatorio.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Distribución de Responsabilidad</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          La responsabilidad puede distribuirse entre múltiples actores: desarrolladores, operadores, 
          usuarios y los propios sistemas. Esta distribución requiere marcos claros y justos.
        </p>
      `,
      quiz: [
        {
          question: "¿Qué enfoque ético evalúa las acciones basándose únicamente en sus resultados?",
          options: ["Deontología", "Consecuencialismo", "Ética de la virtud", "Utilitarismo extremo"],
          correct: 1
        },
        {
          question: "La deontología se centra en:",
          options: ["Los resultados", "El deber y las reglas", "Las emociones", "Los costos"],
          correct: 1
        },
        {
          question: "¿Qué propuesta legal emergente se menciona para sistemas autónomos?",
          options: ["Prohibición total", "Personalidad jurídica electrónica", "Impuestos especiales", "Registro obligatorio"],
          correct: 1
        },
        {
          question: "¿Entre quiénes puede distribuirse la responsabilidad en sistemas autónomos?",
          options: ["Solo desarrolladores", "Desarrolladores, operadores, usuarios y sistemas", "Solo usuarios", "Solo el gobierno"],
          correct: 1
        },
        {
          question: "¿Qué enfatiza la ética de la virtud?",
          options: ["Las consecuencias", "Las reglas", "El carácter moral del agente", "Los procedimientos"],
          correct: 2
        }
      ]
    },
    {
      id: 'd',
      title: "Casos de Estudio y Aplicaciones",
      icon: Users,
      content: `
        <h2 class="text-2xl font-bold mb-4 text-red-700">Casos de Estudio y Aplicaciones</h2>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Vehículos Autónomos</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          Los vehículos autónomos presentan dilemas éticos clásicos como el "problema del tranvía" en 
          situaciones reales. ¿Debe un vehículo autónomo sacrificar a su pasajero para salvar a cinco 
          peatones? ¿Quién es responsable de esta decisión programada?
        </p>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Sistemas de IA en Salud</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          Los algoritmos de diagnóstico médico plantean preguntas sobre responsabilidad cuando cometen 
          errores. La cadena de responsabilidad incluye al médico, al hospital, al desarrollador del 
          software y potencialmente al paciente.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Armas Autónomas Letales</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          Los sistemas de armas autónomos letales (LAWS) representan uno de los casos más controversiales, 
          donde la decisión de quitar una vida humana podría ser tomada por un algoritmo sin intervención 
          humana directa.
        </p>
        
        <h3 class="text-xl font-semibold mb-3 text-red-600">Sistemas Financieros Algorítmicos</h3>
        <p class="mb-4 text-gray-700 leading-relaxed">
          El trading de alta frecuencia y los sistemas de crédito automatizados pueden causar crashes 
          financieros o discriminación sistemática. La atribución de responsabilidad en estos casos 
          es compleja y multifacética.
        </p>
      `,
      quiz: [
        {
          question: "¿Qué dilema ético clásico se relaciona con los vehículos autónomos?",
          options: ["El problema del prisionero", "El problema del tranvía", "La paradoja de Russell", "El dilema del erizo"],
          correct: 1
        },
        {
          question: "En sistemas de IA médica, ¿quiénes pueden ser responsables de los errores?",
          options: ["Solo el médico", "Solo el desarrollador", "Médico, hospital, desarrollador y paciente", "Solo el hospital"],
          correct: 2
        },
        {
          question: "¿Qué significa LAWS?",
          options: ["Legal Autonomous Weapon Systems", "Lethal Autonomous Weapon Systems", "Legal Advanced Weapon Systems", "Large Autonomous Weapon Systems"],
          correct: 1
        },
        {
          question: "¿Qué problemas pueden causar los sistemas financieros algorítmicos?",
          options: ["Solo pérdidas menores", "Crashes financieros y discriminación", "Solo beneficios", "Solo confusión"],
          correct: 1
        },
        {
          question: "¿Por qué son controversiales las armas autónomas letales?",
          options: ["Son muy caras", "Un algoritmo podría decidir quitar una vida sin intervención humana", "Son muy lentas", "Son muy ruidosas"],
          correct: 1
        }
      ]
    }
  ]
};

const Quiz = ({ questions, onComplete, chapterTitle }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">
            {score >= questions.length * 0.8 ? '🎉' : score >= questions.length * 0.6 ? '👍' : '📚'}
          </div>
          <h3 className="text-2xl font-bold text-red-700 mb-2">
            {chapterTitle} - Resultados
          </h3>
          <p className="text-xl mb-4">
            Obtuviste {score} de {questions.length} preguntas correctas
          </p>
          <p className="text-lg text-gray-600 mb-6">
            {score >= questions.length * 0.8 ? '¡Excelente trabajo!' : 
             score >= questions.length * 0.6 ? '¡Buen trabajo!' : 
             '¡Sigue estudiando!'}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <RotateCcw size={20} />
              Reintentar
            </button>
            <button
              onClick={() => onComplete(score, questions.length)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-red-700">{chapterTitle} - Evaluación</h3>
          <span className="text-gray-500">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">
          {question.question}
        </h4>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQuestion, index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
              }`}
            >
              <span className="font-medium text-gray-700">{String.fromCharCode(65 + index)}. </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          Anterior
        </button>
        <button
          onClick={nextQuestion}
          disabled={!isAnswered}
          className="bg-red-600 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-colors flex items-center gap-2"
        >
          {currentQuestion < questions.length - 1 ? 'Siguiente' : 'Finalizar'}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const Certificate = ({ userName, userID, totalScore, totalQuestions, onClose }) => {
  const percentage = Math.round((totalScore / totalQuestions) * 100);
  const currentDate = new Date().toLocaleDateString('es-ES');
  
  const handlePrint = () => {
    // Crear una nueva ventana para imprimir solo el certificado
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    const certificateContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Certificado - ${userName}</title>
          <style>
            @media print {
              body { margin: 0; }
              .no-print { display: none !important; }
            }
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
              background: linear-gradient(135deg, #fef2f2 0%, #ffffff 100%);
            }
            .certificate {
              max-width: 800px;
              margin: 0 auto;
              padding: 40px;
              border: 8px solid #dc2626;
              border-radius: 15px;
              background: white;
              text-align: center;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .trophy { font-size: 80px; margin-bottom: 20px; }
            .title { color: #dc2626; font-size: 36px; font-weight: bold; margin-bottom: 10px; }
            .divider { width: 100px; height: 4px; background: #dc2626; margin: 20px auto; }
            .subtitle { color: #6b7280; font-size: 18px; margin-bottom: 20px; }
            .name { color: #dc2626; font-size: 32px; font-weight: bold; margin: 10px 0; }
            .id { color: #6b7280; font-size: 14px; margin-bottom: 20px; }
            .course { color: #dc2625; font-size: 24px; font-weight: bold; margin: 20px 0; }
            .score-box { 
              background: #fef2f2; 
              border-radius: 10px; 
              padding: 20px; 
              margin: 30px auto; 
              max-width: 300px;
              border: 2px solid #dc2626;
            }
            .score { color: #dc2626; font-size: 20px; font-weight: bold; }
            .date { color: #6b7280; margin: 30px 0; }
            .footer { 
              border-top: 1px solid #e5e7eb; 
              padding-top: 20px; 
              margin-top: 30px; 
              color: #9ca3af; 
              font-size: 12px; 
            }
          </style>
        </head>
        <body>
          <div class="certificate">
            <div class="trophy">🏆</div>
            <h1 class="title">Certificado de Finalización</h1>
            <div class="divider"></div>
            
            <p class="subtitle">Se certifica que</p>
            <h2 class="name">${userName}</h2>
            <p class="id">CC: ${userID}</p>
            
            <p class="subtitle">Ha completado exitosamente el curso</p>
            <h3 class="course">"Responsabilidad Moral en Sistemas Autónomos"</h3>
            
            <div class="score-box">
              <p class="score">Puntuación Final: ${totalScore} / ${totalQuestions} (${percentage}%)</p>
            </div>
            
            <p class="date">Otorgado el ${currentDate}</p>
            
            <div class="footer">
              <p>Este certificado valida la comprensión de los fundamentos éticos y morales<br>
              en el desarrollo y aplicación de sistemas autónomos.</p>
            </div>
          </div>
        </body>
      </html>
    `;
    
    printWindow.document.write(certificateContent);
    printWindow.document.close();
    printWindow.focus();
    
    // Imprimir automáticamente después de que se cargue el contenido
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    };
  };

  const handleDownloadPDF = () => {
    // Crear canvas para generar PDF
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Configurar dimensiones (tamaño carta)
    canvas.width = 800;
    canvas.height = 600;
    
    // Fondo blanco
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Borde decorativo
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Configuración de texto
    ctx.textAlign = 'center';
    ctx.fillStyle = '#dc2626';
    
    // Título
    ctx.font = 'bold 36px Arial';
    ctx.fillText('Certificado de Finalización', canvas.width / 2, 100);
    
    // Línea decorativa
    ctx.fillRect(canvas.width / 2 - 50, 120, 100, 4);
    
    // Texto "Se certifica que"
    ctx.fillStyle = '#6b7280';
    ctx.font = '18px Arial';
    ctx.fillText('Se certifica que', canvas.width / 2, 160);
    
    // Nombre del usuario
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 28px Arial';
    ctx.fillText(userName, canvas.width / 2, 200);
    
    // Cédula
    ctx.fillStyle = '#6b7280';
    ctx.font = '14px Arial';
    ctx.fillText(`CC: ${userID}`, canvas.width / 2, 225);
    
    // Texto "Ha completado exitosamente"
    ctx.font = '18px Arial';
    ctx.fillText('Ha completado exitosamente el curso', canvas.width / 2, 265);
    
    // Nombre del curso
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('"Responsabilidad Moral en Sistemas Autónomos"', canvas.width / 2, 300);
    
    // Caja de puntuación
    ctx.fillStyle = '#fef2f2';
    ctx.fillRect(canvas.width / 2 - 150, 330, 300, 60);
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 2;
    ctx.strokeRect(canvas.width / 2 - 150, 330, 300, 60);
    
    // Puntuación
    ctx.fillStyle = '#dc2626';
    ctx.font = 'bold 18px Arial';
    ctx.fillText(`Puntuación Final: ${totalScore} / ${totalQuestions} (${percentage}%)`, canvas.width / 2, 365);
    
    // Fecha
    ctx.fillStyle = '#6b7280';
    ctx.font = '16px Arial';
    ctx.fillText(`Otorgado el ${currentDate}`, canvas.width / 2, 430);
    
    // Texto del footer
    ctx.font = '12px Arial';
    ctx.fillStyle = '#9ca3af';
    ctx.fillText('Este certificado valida la comprensión de los fundamentos éticos y morales', canvas.width / 2, 480);
    ctx.fillText('en el desarrollo y aplicación de sistemas autónomos.', canvas.width / 2, 500);
    
    // Convertir canvas a blob y descargar
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Certificado_${userName.replace(/\s+/g, '_')}_${userID}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 'image/png');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header con botones de acción */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-bold text-red-700">Tu Certificado</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              title="Imprimir certificado"
            >
              <Printer size={18} />
              Imprimir
            </button>
            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              title="Descargar como imagen"
            >
              <Download size={18} />
              Descargar
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              title="Cerrar"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Certificado */}
        <div className="p-8">
          <div className="text-center border-4 border-red-200 rounded-lg p-8 bg-gradient-to-br from-red-50 to-white" id="certificate-content">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold text-red-700 mb-2">Certificado de Finalización</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            
            <p className="text-lg text-gray-700 mb-4">
              Se certifica que
            </p>
            <p className="text-2xl font-bold text-red-700 mb-2">{userName}</p>
            <p className="text-sm text-gray-600 mb-4">CC: {userID}</p>
            
            <p className="text-lg text-gray-700 mb-4">
              Ha completado exitosamente el curso
            </p>
            <p className="text-xl font-bold text-red-600 mb-4">
              "Responsabilidad Moral en Sistemas Autónomos"
            </p>
            
            <div className="bg-red-100 rounded-lg p-4 mb-6 border-2 border-red-200">
              <p className="text-lg font-semibold text-red-700">
                Puntuación Final: {totalScore} / {totalQuestions} ({percentage}%)
              </p>
            </div>
            
            <p className="text-gray-600 mb-6">
              Otorgado el {currentDate}
            </p>
            
            <div className="border-t border-gray-300 pt-4">
              <p className="text-sm text-gray-500">
                Este certificado valida la comprensión de los fundamentos éticos y morales<br />
                en el desarrollo y aplicación de sistemas autónomos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer con instrucciones */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Printer size={16} className="text-blue-600" />
                <span>Imprimir para archivo físico</span>
              </div>
              <div className="flex items-center gap-2">
                <Download size={16} className="text-green-600" />
                <span>Descargar imagen para compartir</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Cerrar Certificado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MoralResponsibilityBook = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedChapters, setCompletedChapters] = useState({});
  const [chapterScores, setChapterScores] = useState({});
  const [showCertificate, setShowCertificate] = useState(false);
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [showUserForm, setShowUserForm] = useState(false);

  const currentChapterData = bookData.chapters[currentChapter];
  const totalChapters = bookData.chapters.length;
  const completedCount = Object.keys(completedChapters).length;

  const handleQuizComplete = (score, totalQuestions) => {
    const chapterId = currentChapterData.id;
    setCompletedChapters(prev => ({ ...prev, [chapterId]: true }));
    setChapterScores(prev => ({ ...prev, [chapterId]: { score, totalQuestions } }));
    setShowQuiz(false);

    // Check if all chapters are completed
    if (completedCount + 1 === totalChapters) {
      setShowUserForm(true);
    }
  };

  const handleCertificateRequest = () => {
    if (userName && userID) {
      setShowCertificate(true);
      setShowUserForm(false);
    }
  };

  const resetProgress = () => {
    setCompletedChapters({});
    setChapterScores({});
    setCurrentChapter(0);
    setShowQuiz(false);
    setShowCertificate(false);
    setUserName('');
    setUserID('');
    setShowUserForm(false);
  };

  const getTotalScore = () => {
    return Object.values(chapterScores).reduce((total, chapter) => total + chapter.score, 0);
  };

  const getTotalQuestions = () => {
    return Object.values(chapterScores).reduce((total, chapter) => total + chapter.totalQuestions, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full p-3">
              <Brain className="text-red-600" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{bookData.title}</h1>
              <p className="text-red-100">{bookData.subtitle}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-red-200">Progreso</div>
              <div className="text-lg font-bold">{completedCount}/{totalChapters}</div>
            </div>
            <button
              onClick={resetProgress}
              className="bg-red-500 hover:bg-red-600 p-2 rounded-lg transition-colors"
              title="Reiniciar Progreso"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
              <h3 className="font-bold text-lg mb-4 text-red-700">Contenido</h3>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(completedCount / totalChapters) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{completedCount} de {totalChapters} completados</p>
              </div>

              <nav className="space-y-2">
                {bookData.chapters.map((chapter, index) => {
                  const IconComponent = chapter.icon;
                  const isCompleted = completedChapters[chapter.id];
                  const isActive = index === currentChapter;

                  return (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        setCurrentChapter(index);
                        setShowQuiz(false);
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-red-600 text-white shadow-lg'
                          : isCompleted
                          ? 'bg-green-100 text-green-800 border border-green-300'
                          : 'bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-red-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent size={20} />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{chapter.title}</div>
                        </div>
                        {isCompleted && (
                          <div className="text-green-600">
                            <Award size={16} />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </nav>

              {completedCount === totalChapters && (
                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg border border-green-300">
                  <div className="text-center">
                    <Award className="mx-auto text-green-600 mb-2" size={24} />
                    <p className="text-sm font-semibold text-green-800">
                      ¡Felicitaciones! Has completado todos los capítulos
                    </p>
                    <button
                      onClick={() => setShowUserForm(true)}
                      className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Obtener Certificado
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg">
              {/* Chapter Navigation */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <button
                  onClick={() => {
                    if (currentChapter > 0) {
                      setCurrentChapter(currentChapter - 1);
                      setShowQuiz(false);
                    }
                  }}
                  disabled={currentChapter === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                  Anterior
                </button>

                <div className="text-center">
                  <h2 className="text-xl font-bold text-red-700">{currentChapterData.title}</h2>
                  <p className="text-sm text-gray-500">
                    Capítulo {currentChapter + 1} de {totalChapters}
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (currentChapter < totalChapters - 1) {
                      setCurrentChapter(currentChapter + 1);
                      setShowQuiz(false);
                    }
                  }}
                  disabled={currentChapter === totalChapters - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Siguiente
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {showQuiz ? (
                  <Quiz
                    questions={currentChapterData.quiz}
                    onComplete={handleQuizComplete}
                    chapterTitle={currentChapterData.title}
                  />
                ) : (
                  <div>
                    {/* Chapter Content */}
                    <div 
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: currentChapterData.content }}
                    />

                    {/* Action Buttons */}
                    <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        {completedChapters[currentChapterData.id] && (
                          <span className="inline-flex items-center gap-2 text-green-600">
                            <Award size={16} />
                            Capítulo completado
                            {chapterScores[currentChapterData.id] && (
                              <span>
                                - Puntuación: {chapterScores[currentChapterData.id].score}/{chapterScores[currentChapterData.id].totalQuestions}
                              </span>
                            )}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setShowQuiz(true)}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-medium"
                      >
                        {completedChapters[currentChapterData.id] ? 'Repetir Evaluación' : 'Comenzar Evaluación'}
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Form Modal */}
      {showUserForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <Award className="mx-auto text-red-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-red-700 mb-2">¡Felicitaciones!</h3>
              <p className="text-gray-600">
                Has completado todos los capítulos. Ingresa tus datos para generar tu certificado.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de cédula
                </label>
                <input
                  type="text"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Ingresa tu número de cédula"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowUserForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleCertificateRequest}
                disabled={!userName || !userID}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Generar Certificado
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <Certificate
          userName={userName}
          userID={userID}
          totalScore={getTotalScore()}
          totalQuestions={getTotalQuestions()}
          onClose={() => setShowCertificate(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Libro Interactivo: Responsabilidad Moral en Sistemas Autónomos
            </p>
            <p className="text-sm">
              Una guía completa para comprender los desafíos éticos en la era de la inteligencia artificial
            </p>
            <div className="mt-4 flex justify-center items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <Brain size={16} className="text-red-600" />
                Desarrollado con React y Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MoralResponsibilityBook;