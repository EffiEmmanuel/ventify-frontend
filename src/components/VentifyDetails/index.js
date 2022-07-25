import React from 'react'
import './index.css'
import styled from 'styled-components'

function VentifyDetails({ title, listItems, image, alt, reverse }) {
    return (
        <div className='ventify-details'>
            <VentifyDetailsH2 reverse={reverse}>{title}<span className='ventify-pink'>.</span></VentifyDetailsH2>

            <VentifyDetailsContainer className='left' reverse={reverse}>
                <ul>
                    {listItems.map((listItem, index) => {
                        return (
                            <li key={index}>{listItem}</li>
                        )
                    })}
                </ul>
                <div className='right'>
                    <img src={image} alt={alt} className='ventify-detail-image' />
                </div>
            </VentifyDetailsContainer>


        </div>
    )
}

const VentifyDetailsContainer = styled.div`
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
`

const VentifyDetailsH2 = styled.h2`
    text-align: ${props => props.reverse ? 'end' : 'inherit'};
`

export default VentifyDetails