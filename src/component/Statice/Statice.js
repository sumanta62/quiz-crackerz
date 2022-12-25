import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Statice = () => {
    const topic = useLoaderData();
    const statices = topic.data;
    return (
        <div className='bg-gray-800 text-white'>
            <div className=" statice sm:w-11/12 md:w-9/12 mx-auto lg:w-6/12 p-9 ">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width={200}
                    height={400}
                    data={statices}
                    margin={{
                        right: 30,
                      }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis className='' dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="gray" />
                </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default Statice;