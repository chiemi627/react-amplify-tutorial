type ResultsStateType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;    
    }
  }

const Results = ({ results }: ResultsStateType) => {
    const { country, cityName, temperature, conditionText, icon } = results;
    return (
        <div>
            {country && <div className="results-country">{country}</div>}
            {cityName && <div className="results-city">{cityName}</div>}
            {temperature && <div className="results-temperature">{temperature} <span>°C</span></div>}
            {conditionText &&
                <div className="results-temp">
                    <img src={icon} alt="icon" />
                    <span>{conditionText}</span>
                </div>
            }
        </div>
    );
};

export default Results;