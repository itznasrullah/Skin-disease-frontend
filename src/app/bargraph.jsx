import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Bargraph = ({data}) => {
    return (
        <ResponsiveContainer width="80%" height="100%">
            <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis type="number" hide={true} /> 
                <YAxis dataKey="name" type="category" width={120} /> 
                <Bar dataKey="probability" fill="#4564e4" barSize={50}>
                    {data.map((entry, index) => (
                        <Bar key={`bar-${index}`} fill="#4564e4" />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Bargraph;
