import React, {useState} from 'react';
import './RecommendationResult.css';

const RecommendationResult = ({recommendation}) => {
    return (
       
        <div className="recommendation-result">
            {recommendation ? (
                <div>
                    <h2>Recommend Tech Stack</h2>
                    <p>{recommendation}</p>
                </div>
            
        
        ):(
                <p>Enter an Industry to get Recommendation</p>
            )}

        </div>
        
    );
};

export default RecommendationResult;