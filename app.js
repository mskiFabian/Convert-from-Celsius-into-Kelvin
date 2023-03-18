// easy converter from celsiusPrompt value into kelvin 
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celsius')
    }
    const kelvin = Number(measurement.value) + 273
    return kelvin
}
console.log(measureKelvin())