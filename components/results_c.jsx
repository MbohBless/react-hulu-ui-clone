import React from 'react'
import Thumbnail from './thumbnail'
import FlipMove from 'react-flip-move';

function Results({ data }) {
    return <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2
     xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {data.map(res => {
            return <Thumbnail key={res.id} result={res} />
        })}

    </FlipMove>;
}

export default Results