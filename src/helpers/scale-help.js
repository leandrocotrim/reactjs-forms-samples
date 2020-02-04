class ScaleHelp {
    static get SCALES() {
        let scales = new Map();
        scales.set('C', { name: 'Celsius', formula: (f) => (f - 32) / 1.8 });
        scales.set('F', { name: 'Fahrenheit', formula: (c) => (c * 1.8) + 32 });
        return scales;
    }

    static get SCALES_TYPES() {
        return {
            Celsius: 'C',
            Fahrenheit: 'F'
        };
    }
}

export default ScaleHelp;
