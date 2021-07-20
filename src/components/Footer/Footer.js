import React from 'react'

const Footer = () => {
    const p = {
        marginTop: '1rem',
        fontSize: '14px',
        color: 'hsl(234, 39%, 85%)'
    }
    const attribution = {
        marginTop: '1rem',
        fontSize: '11px', 
        textAlign: 'center'
    }
    const link = {
        color: 'hsl(228, 45%, 44%)'
    }
    return (
        <>
            <p style={p}>Drag and drop to reorder list</p>

            <div class="attribution" style={attribution}>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" style={link}>Frontend Mentor</a>. 
    Coded by <a href="https://github.com/ChinyangaTL" style={link}>Chinyanga TL</a>.
  </div>
        </>
    )
}

export default Footer
