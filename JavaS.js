document.addEventListener('DOMContentLoaded', () => {
    
    const energeticPlayfulPalette = {
        red: '#FF6B6B',
        yellow: '#FFD166',
        green: '#06D6A0',
        blue: '#118AB2',
        darkBlue: '#073B4C'
    };

    const wrapLabel = (label, maxWidth = 16) => {
        if (typeof label !== 'string' || label.length <= maxWidth) {
            return label;
        }
        const words = label.split(' ');
        const lines = [];
        let currentLine = '';
        words.forEach(word => {
            if ((currentLine + ' ' + word).length > maxWidth) {
                lines.push(currentLine.trim());
                currentLine = word;
            } else {
                currentLine += ' ' + word;
            }
        });
        lines.push(currentLine.trim());
        return lines;
    };

    const tooltipTitleCallback = (tooltipItems) => {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
            return label.join(' ');
        }
        return label;
    };
    
    const commonChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                        family: 'Poppins'
                    },
                    color: energeticPlayfulPalette.darkBlue
                }
            },
            tooltip: {
                callbacks: {
                    title: tooltipTitleCallback
                },
                bodyFont: {
                   family: 'Poppins'
                },
                titleFont: {
                   family: 'Poppins'
                }
            }
        }
    };

    const ctx6 = document.getElementById('skillsChart6')?.getContext('2d');
    if (ctx6) {
        new Chart(ctx6, {
            type: 'doughnut',
            data: {
                labels: ['Sumas y Restas', 'Conteo', 'Lógica Simple'],
                datasets: [{
                    label: 'Foco de Habilidades (6 años)',
                    data: [60, 30, 10],
                    backgroundColor: [energeticPlayfulPalette.red, energeticPlayfulPalette.yellow, energeticPlayfulPalette.green],
                    borderColor: '#fff',
                    borderWidth: 4,
                }]
            },
            options: { ...commonChartOptions, cutout: '60%' }
        });
    }
    
    const ctx8 = document.getElementById('skillsChart8')?.getContext('2d');
    if (ctx8) {
        new Chart(ctx8, {
            type: 'doughnut',
            data: {
                labels: ['Operaciones', 'Multiplicación', 'Lógica y Problemas'],
                datasets: [{
                    label: 'Foco de Habilidades (8 años)',
                    data: [45, 25, 30],
                    backgroundColor: [energeticPlayfulPalette.blue, energeticPlayfulPalette.green, energeticPlayfulPalette.yellow],
                    borderColor: '#fff',
                    borderWidth: 4,
                }]
            },
            options: { ...commonChartOptions, cutout: '60%' }
        });
    }

    const ctxImpact = document.getElementById('impactChart')?.getContext('2d');
    if (ctxImpact) {
        new Chart(ctxImpact, {
            type: 'bar',
            data: {
                labels: ['Compromiso del Estudiante', 'Pensamiento Lógico', wrapLabel('Atención al Detalle'), 'Retención del Concepto'],
                datasets: [{
                    label: 'Libro Encadenado',
                    data: [90, 85, 95, 80],
                    backgroundColor: energeticPlayfulPalette.blue,
                    borderRadius: 6
                }, {
                    label: 'Libro Tradicional',
                    data: [50, 60, 65, 55],
                    backgroundColor: energeticPlayfulPalette.yellow,
                    borderRadius: 6
                }]
            },
            options: {
                ...commonChartOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#e0e0e0'
                        },
                        ticks: {
                            color: energeticPlayfulPalette.darkBlue,
                            font: {
                                family: 'Poppins'
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: energeticPlayfulPalette.darkBlue,
                            font: {
                                family: 'Poppins'
                            }
                        }
                    }
                }
            }
        });
    }
});