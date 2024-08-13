import React, { useState } from 'react';
import axios from 'axios';
import './RecommendationForm.css';
import './AnimatedPage';
import AnimatedPage from './AnimatedPage';
const RecommendationForm = ({ setRecommendation }) => {
    const [industry, setIndustry] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = axios.post('http://localhost:5000/recommend', { industry })
            setRecommendation(response.data.recommendation);

        }
        catch(error){
            console.error('Error fetching recommendation',error);
            setRecommendation('Error fetching recommendation');    
        }

    };
    return (
        <AnimatedPage>
        <form className="recommendation-form" onSubmit={handleSubmit}>
            <label htmlFor="industry" >Industry:</label>
            <input type="text" id="industry" value={industry} onChange={(e)=> setIndustry(e.target.value)} placeholder="e.g., Pentesting" />
            <button type="submit" >Get Recommendation</button>
        </form>
        </AnimatedPage>
    );
};

export default RecommendationForm;