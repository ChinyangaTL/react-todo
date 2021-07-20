import React from 'react'



// - Very Light Gray: hsl(0, 0%, 98%)
// - Very Light Grayish Blue: hsl(236, 33%, 92%)
// - Light Grayish Blue: hsl(233, 11%, 84%)
// - Dark Grayish Blue: hsl(236, 9%, 61%)
// - Very Dark Grayish Blue: hsl(235, 19%, 35%)

// ### Dark Theme

// - Very Dark Blue: hsl(235, 21%, 11%)
// - Very Dark Desaturated Blue: hsl(235, 24%, 19%)
// - Light Grayish Blue: hsl(234, 39%, 85%)
// - Light Grayish Blue (hover): hsl(236, 33%, 92%)
// - Dark Grayish Blue: hsl(234, 11%, 52%)
// - Very Dark Grayish Blue: hsl(233, 14%, 35%)
// - Very Dark Grayish Blue: hsl(237, 14%, 26%)

export const themes = {
    dark: {
        color: 'hsl(234, 39%, 85%)',
        background: 'hsl(235, 21%, 11%)'
    },
    light: {
        color: 'hsl(236, 33%, 92%)',
        background: 'hsl(236, 33%, 92%)'
    }

}

const ThemeContext = React.createContext() 

export default ThemeContext