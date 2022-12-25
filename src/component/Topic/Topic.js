import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Topic = () => {
   const topics = useLoaderData();
   console.log(topics)
   const{name}= topics.data;

    return (
        <div className='bg-gray-600 py-9'>
             <div className='text-center text-2xl pt-9 text-white'>
                <b>Quiz of {name}</b>
            </div>
           {
            topics.data.questions.map(topic => <Topics key={topic.id} topic={topic}></Topics>)
           }
        </div>
    );
};

export default Topic;