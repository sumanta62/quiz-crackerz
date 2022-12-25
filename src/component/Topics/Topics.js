import React, { useId } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';

const Topics = ({ topic }) => {
    const {question, correctAnswer, options } = topic;
  
    const clickIcon =(correctAnswer) =>{
        toast.success(correctAnswer, {autoClose: 2500, theme: "dark"});

    }
    const select = useId();

    const currectAns =(options)=>{
        if(correctAnswer === options){
            toast.success('Correct answer', {autoClose: 1000, theme: "dark"});
        }
        else{
             toast.warning('Wrong answer !!', {autoClose: 1000, theme: "dark"});
        }
        console.log(options)

    }

    return (
        <div >
            <div className="max-w-lg p-4 shadow-md mx-auto bg-slate-50  mt-9 rounded">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <p><b>Question:</b> {question}</p>
                    </div>
                    <div className='ml-4'>
                        <EyeIcon onClick={() =>clickIcon(correctAnswer)} className="h-6 w-6 text-blue-500" />
                        
                    </div>
                </div>

                <div className="space-y-4  grid items-baseline grid-cols-2">

                    <div onChange={()=>currectAns(options[0])} className='border hover:bg-slate-300 border-blue-400 p-2 m-2 rounded'>
                        <input className='cursor-pointer' type="radio" name="java" id={select + "first"} /> 
                        <label className='ml-3 p-2 cursor-pointer' htmlFor={select + "first"}>{options[0]? options[0] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={()=>currectAns(options[1])} className='border hover:bg-slate-300 border-blue-400 p-2  m-2 rounded'>
                        <input className='cursor-pointer' type="radio" name="java" id={select + "second"} />
                        <label className='ml-3 p-2 cursor-pointer' htmlFor={select + "second"}>{options[1] ? options[1] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={()=>currectAns(options[2])} className='border hover:bg-slate-300 border-blue-400 p-2  m-2 rounded'>
                        <input className='cursor-pointer' type="radio" name="java" id={select + "third"} />
                        <label  className='ml-3 p-2 cursor-pointer' htmlFor={select + "third"}>{options[2] ? options[2] : 'Undifined'}</label><br></br>

                    </div>
                    <div onChange={()=>currectAns(options[3])} className='border hover:bg-slate-300 border-blue-400 p-2 m-2 rounded'>
                        <input className='cursor-pointer' type="radio" name="java" id={select + "forth"} /> 
                        <label className='ml-3 cursor-pointer p-2' htmlFor={select + "forth"}>{options[3] ? options[3] : 'Undifined'}</label><br></br>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Topics;