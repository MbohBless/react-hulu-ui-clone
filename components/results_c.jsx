import React from 'react'
import Thumbnail from './thumbnail'

function Results({ data }) {
    return <div>
        {data.map(res => {
            return <Thumbnail key={res.id} request={res} />
        })}

    </div>;

}

export default Results