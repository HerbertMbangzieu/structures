import React, { useState } from 'react';
import { quizz } from '../../courses';
import { controlsAlgo } from '../../courses';

const TdControls = () => {
    const [correction, setCorrection] = useState(false)
  return (
    
    <div className='mx-4'>
        <div className='w-full flex justify-center text-xl'>
            <h1 className='font-bold bg-blue-600 px-9 py-2 text-white text-lg rounded-lg shadow-lg shadow-slate-400'> Travaux dirigés - Structures de contrôle</h1>
        </div>
        <p className='mt-10 italic'> La première partie est un QCM sélectionnez la bonne réponse. Vous pouvez répondre aux questions de la deuxième partie sur une feuille. Lorsque vous aurez terminé, cliquez sur <b>Correction</b> pour afficher les réponses. </p>
        <h1 className="text-center text-lg my-3 font-bold text-blue-600"> Questions à choix multiple </h1><hr/>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3'>
        {
            quizz.map((question,index) =>(
                <div className='px-2 py-3 border-[1px] rounded'>
                    <h1 className='font-bold'>{index+1}. {question.question} </h1>
                    <div className='flex justify-start my-2'>
                        <input type={"radio"} name={"answer"+index} id={"answer1"+index} value={question.answer1}/>
                        <label htmlFor={'answer1'+index} className="ml-2 text-left"> {question.answer1} </label>
                    </div>

                    <div className='flex justify-start my-2'>
                        <input type={"radio"} name={"answer"+index} id={"answer2"+index} value={question.answer2}/>
                        <label htmlFor={'answer2'+index} className="ml-2 text-left"> {question.answer2} </label>
                    </div>

                    <div className='flex justify-start my-2'>
                        <input type={"radio"} name={"answer"+index} id={"answer3"+index} value={question.answer3}/>
                        <label htmlFor={'answer3'+index} className="ml-2 text-left"> {question.answer3} </label>
                    </div>

                    <div className='flex justify-start my-2'>
                        <div className={correction ? " font-bold italic ml-2 text-left text-green-600" : "hidden"}> 
                            <p>Réponse:  {question.correct}  </p>
                            <p className={question.explanation ? "italic ml-2 text-left text-gray-700 font-normal" : "hidden"}>explication:  {question.explanation}  </p>
                        </div>
                    </div>


                </div>
            ))
        }
        </div>

        <h1 className="text-center text-lg my-3 font-bold text-blue-600"> Etude d'un algorithme </h1><hr/>
        <div className='flex justify-start'>
        <div>
            <h1 className='font-bold text-lg text-left underline mt-3'> Enoncé </h1>
            <p className='my-3 text-left'> {controlsAlgo.enonce}. </p>
            <img src={controlsAlgo.algo} alt="algo"/>
            <hr/>
            <div className='mt-3 flex justify-start'>
            <div>
                {
                    controlsAlgo.questions.map((question, index) => (
                        <div className='text-left my-3 mb-6'>
                            {index + 1}. {question.question}

                            <div className={ correction ? 'block my-3 italic font-bold' : 'hidden' }> {question.answer}</div>
                        </div>
                        
                        
                    ))
                }
            </div>
            </div>
        </div>
        </div>

        <button className='px-10 py-3 rounded-md bg-blue-600 text-white font-bold mb-20 mt-5 active:scale-95' onClick={()=>setCorrection(!correction)}>  Correction </button>
    </div>
  )
}

export default TdControls