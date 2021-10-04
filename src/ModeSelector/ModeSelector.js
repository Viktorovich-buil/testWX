import React from 'react';

export default props =>{
    const Url100 = `http://www.filltext.com/?rows=100&date={date|01-01-2021,01-11-2021}&title={business}&quantity={numberRange|1,100}&distance={numberRange|5,1000}`;
    const Url1000 = `http://www.filltext.com/?rows=1000&date={date|01-01-2021,01-11-2021}&title={business}&quantity={numberRange|1,100}}&distance={numberRange|5,1000}`;



    return (
        <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
            <button onClick={()=>props.onSelect(Url100)} className="btn btn-outline-secondary">100 строк</button>
            <button onClick={()=>props.onSelect(Url1000)} className="btn btn-outline-primary">1000 строк</button>
        </div>
    )
}
