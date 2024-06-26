const { defineColors, defineIcons, build } = require('goodt-framework-css/scripts/theme-utils');

const colors = defineColors({
    body: { value: '#2c2c2c' },
    link: { value: '#1a67fe', variants: ['light', 'dark', 'focus', 'hover'] },
    primary: { value: '#1a67fe', variants: ['light', 'dark', 'focus', 'hover'] },
    green: { value: '#0acf83', variants: ['light', 'dark', 'focus', 'hover'] },
    red: { value: '#ed5564', variants: ['light', 'dark', 'focus', 'hover'] },
    blue: { value: '#5e9dec', variants: ['light', 'dark', 'focus', 'hover'] },
    yellow: { value: '#f7c844', variants: ['light', 'dark', 'focus', 'hover'] },
    orange: { value: '#ff994d', variants: ['light', 'dark', 'focus', 'hover'] },
    grey: { value: '#999999', variants: ['dark', 'light', 'lighter'] },
    white: { value: '#ffffff' },
    black: { value: '#000000' },
    muted: { value: '#dcdcdc' },
    disabled: { value: '#eeeeee', variants: ['dark'] },
    border: { value: '#eeeeee' },
    highlight: { value: '#ffffdd' },
    focus: { value: 'var(--color-primary-focus)' },
    scrollbar: { value: '#cccccc' }
});

const theme = {
    prefix: '',
    readonly: {
        'viewport-xxl': '1920px',
        'viewport-xl': '1280px',
        'viewport-l': '1024px',
        'viewport-m': '840px',
        'viewport-s': '640px',
        'viewport-hd': '1600px'
    },
    public: {
        'ratio-scaling-viewport-min-width': '1920',
        'container-max-width': '1100px',
        'font-family': "'Roboto', Helvetica, Arial, sans-serif",
        'font-family-headings': "'Roboto', Helvetica, Arial, sans-serif",
        'font-size-base-hd': '14',
        'font-size-base': '16',
        'line-height': '1.5',
        'unit-base': '0.5rem',
        'border-radius': '.25rem'
    },
    protected: {
        'font-size': '1rem',
        'font-size-larger': '1.125rem',
        'font-size-smaller': '0.875rem',
        'font-size-xsmaller': '0.75rem',
        'font-size-h1': '2.5rem',
        'h1-line-height': '1.25',
        'h1-margin-bottom': 'var(--spacer5)',
        'font-size-h2': '1.5rem',
        'h2-line-height': '1.25',
        'h2-margin-bottom': 'var(--spacer4)',
        'font-size-h3': '1rem',
        'h3-line-height': '1.5',
        'h3-margin-bottom': 'var(--spacer3)',
        'font-size-h4': 'var(--font-size-h3)',
        'h4-line-height': 'var(--h3-line-height)',
        'h4-margin-bottom': 'var(--h3-margin-bottom)',
        'focus-outline-width': '.rem(2)[@return]',
        'text-shadow': '0 .rem(1)[@return] 0 rgba(0, 0, 0, 0.2)',
        'border-radius1': 'var(--border-radius)',
        'border-radius2': 'calc(var(--border-radius)*2)',
        'border-radius3': 'calc(var(--border-radius)*4)',
        'border-radius4': 'calc(var(--border-radius)*8)',
        'border-radius5': 'calc(var(--border-radius)*16)',
        unit: 'var(--unit-base)',
        spacer: 'calc(var(--unit)*2)',
        spacer1: 'calc(var(--spacer)*0.125)',
        spacer2: 'calc(var(--spacer)*0.25)',
        spacer3: 'calc(var(--spacer)*0.5)',
        spacer4: 'calc(var(--spacer)*0.75)',
        spacer5: 'calc(var(--spacer))',
        spacer6: 'calc(var(--spacer)*1.5)',
        spacer7: 'calc(var(--spacer)*2)',
        spacer8: 'calc(var(--spacer)*2.5)',
        spacer9: 'calc(var(--spacer)*3)',
        'spacer-layout1': 'calc(var(--spacer))',
        'spacer-layout2': 'calc(var(--spacer)*1.5)',
        'spacer-layout3': 'calc(var(--spacer)*2)',
        'spacer-layout4': 'calc(var(--spacer)*3)',
        'spacer-layout5': 'calc(var(--spacer)*4)',
        'spacer-layout6': 'calc(var(--spacer)*6)',
        'spacer-layout7': 'calc(var(--spacer)*10)',
        'width-fixed': 'calc(var(--unit)*16)',
        'width-fixed1': 'calc(var(--width-fixed)*1)',
        'width-fixed2': 'calc(var(--width-fixed)*2)',
        'width-fixed3': 'calc(var(--width-fixed)*3)',
        'width-fixed4': 'calc(var(--width-fixed)*4)',
        'width-fixed5': 'calc(var(--width-fixed)*5)',
        'width-fixed6': 'calc(var(--width-fixed)*6)',
        'width-fixed7': 'calc(var(--width-fixed)*7)',
        'height-fixed': 'calc(var(--unit)*16)',
        'height-fixed1': 'calc(var(--height-fixed)*1)',
        'height-fixed2': 'calc(var(--height-fixed)*2)',
        'height-fixed3': 'calc(var(--height-fixed)*3)',
        'height-fixed4': 'calc(var(--height-fixed)*4)',
        'height-fixed5': 'calc(var(--height-fixed)*5)',
        'height-fixed6': 'calc(var(--height-fixed)*6)',
        'height-fixed7': 'calc(var(--height-fixed)*7)'
    },
    colors,
    icons: defineIcons({
        'select-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path fill="${colors.grey}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`,
        'select-valid-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path fill="${colors.green}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`,
        'select-invalid-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path fill="${colors.red}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`,
        'select-disabled-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path fill="${colors['disabled-dark']}" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`,
        'checkbox-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 34 34"><path fill="${colors.white}" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>`,
        'checkbox-indeterminate-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${colors.white}" d="M19,13H5V11H19V13Z" /></svg>`,
        'radio-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18"><path fill="${colors.white}" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" /></svg>`,
        'switch-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${colors.grey}" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`,
        'switch-valid-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${colors.green}" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`,
        'switch-invalid-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${colors.red}" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`,
        'switch-checked-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${colors.white}" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`
    })
};

build(theme, './src/assets/less/theme.less');