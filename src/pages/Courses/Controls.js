import React from 'react';
import { controls } from '../../courses';

const Controls = () => {

  return (
    <div>
    <div className='mx-8 md:mx-10 lg:mx-20 text-justify'>
        {/* Title  */}
        <div className='w-full flex justify-center text-xl'>
            <h1 className='font-bold bg-blue-600 px-9 py-2 text-white text-lg rounded-lg shadow-lg shadow-slate-400'> {controls.title }</h1>
        </div>

        {/* Content  */}
    <div className='p-3 my-8 border-[1px] rounded-md text-left'>
        <p>{controls.introduction}</p>
    </div>
    {
        
    }

    {
        controls.paragraphs.map((paragraph, index) => (
            <div>
            <div className='text-blue-600 text-left font-bold'>
                {index+1}. {paragraph.title}
            </div>

            <div className='p-3 my-8 border-[1px] rounded-md text-left'>
                {paragraph.content}

                { paragraph.image ? <img src={paragraph.image} alt='illustration'/>: ''}      

                {
                    paragraph.subParagraphs.map((subParagraph, id) => (
                        <div className='my-4'>
                            <h1 className='text-blue-600 font-bold'>{index+1}.{id+1} {subParagraph.title} </h1> <hr/>
                            <p className='mb-3'> {subParagraph.content} </p>
                            <div>
                            <img src={subParagraph.syntaxe} alt={paragraph.title}/>
                            </div>
                            <p> Son organigramme est le suivant: </p>
                            <div>
                            <img src={subParagraph.image} alt={paragraph.title}/>
                            </div>

                            <div> 
                    {subParagraph.examples? 
                    subParagraph.examples.map((example, index) => (
                        <div className='my-5 group'>
                            <u> Exemple {index+1} </u>
                            {example.text} <br/>
                            <h1 className='mt-2 ml-4 bg-blue-600 text-white rounded w-auto shadow-md shadow-slate-500 px-3 py-1'>
                                Solution
                            </h1>
                            <div className='mt-3'>
                                <img src={example.solution} alt="exemple"/>
                            </div>
                        </div>
                    )):
                    ''
                    }
                </div>
                        </div>
                    ))
                }

                <div> 
                    {paragraph.examples? 
                    paragraph.examples.map((example, index) => (
                        <div className='my-5 group'>
                            <u> Exemple {index+1} </u>
                            {example.text} <br/>
                            <h1 className='mt-2 ml-4 bg-blue-600 text-white roundedshadow-md shadow-slate-500 px-3 py-1'>
                                Solution
                            </h1>
                            <div className='mt-3'>
                                <img src={example.solution} alt="exemple"/>
                            </div>
                        </div>
                    )):
                    ''
                    }
                </div>

            </div>
            </div>
        ))
    }
    </div>
    {/* Footer  */}
    <div className='w-full bg-blue-900 text-white font-bold mt-4 fixed bottom-0 p-4'>
        <p> Par Nguemeni Mbangzieu Herbert PLET-P Informatique Industrielle </p>
    </div>
    </div>
  )
}

export default Controls