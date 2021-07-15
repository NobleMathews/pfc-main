import React from 'react'

const Test = ({images}) => {

    return (
        <>
        {images.map(({name,data}) => (
            <>
             <h1>{name}</h1>
             <>
              {data.map(image=>(
                <p>{image}</p>
              ))}
             </>
            </>
        ))}
        </>
    )
}

export default Test;