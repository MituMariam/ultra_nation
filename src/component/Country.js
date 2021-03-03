import React from 'react';

const Country = (props) => {
    console.log(props);
    const {name, population, region, flag } = props.country;
    const handleCountry = props.handleAddCountry;
    return (
        <div className="country_card" style={{display:'flex',alignItems:'center',width:'300px',border:'1px solid #ddd',marginBottom:'10px',padding:'10px'}}>
            <img src={flag} alt="" width="100px" height="70px"/>
            <div>
            <p>{name}</p>
            <p>{population}</p>
            <p>{region}</p>
            <button onClick={() =>handleCountry(props.country)}>Add</button>
            </div>
        </div>
    );
};

export default Country;