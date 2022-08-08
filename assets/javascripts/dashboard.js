var months = ["មករា", "គុម្ភះ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
window.addEventListener("load", init);

function init() {
    Chart.defaults.font.family = "'Open Sans', 'Battambang'";
    initAnnualCarReport();
    initAnnualAccessoriesReport();
    initBuyTypeReport();
}

function initAnnualCarReport() {
    const data = {
        labels: months,
        datasets: [
            {
                label: 'Fully Rounded',
                data: [10, 20, 40],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: 'Small Radius',
                data: [20, 30, 40, 50],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 199, 132, 0.5)',
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: 'Small Radius',
                data: [20, 30, 40, 50],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 19, 142, 0.5)',
                borderWidth: 1,
                borderSkipped: false,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'របាយការណ៏ ៥ ក្រុមហ៊ុនដែលលក់ឡានច្រើនបំផុតប្រចាំឆ្នាំ',
                    font: {
                        size: 20
                    }
                }
            }
        },
    };
    const annualSaleReport = new Chart(document.getElementById("annual-sale-report"), config);
}

function initBuyTypeReport() {
    const data = {
        labels: ["ទិញផ្ដាច់", "បង់រំលស់"],
        datasets: [
            {
                label: 'Fully Rounded',
                data: [20, 10],
                borderColor: "rgb(255, 255, 255)",
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(25, 99, 132)'],
                borderWidth: 1,
                borderSkipped: false,
            },
        ]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'ការទិញពីអតិថិជន',
                    font: {
                        size: 20
                    }
                }
            }
        },
    };
    const BuyReport = new Chart(document.getElementById("buy-type-report"), config);
}

function initAnnualAccessoriesReport() {
    const data = {
        labels: months,
        datasets: [
            {
                label: 'Fully Rounded',
                data: [10, 20, 40],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: 'Small Radius',
                data: [20, 30, 40, 50],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 199, 132, 0.5)',
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: 'Small Radius',
                data: [20, 30, 40, 50],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 19, 142, 0.5)',
                borderWidth: 1,
                borderSkipped: false,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'របាយការណ៏ ៥ ប្រភេទគ្រឿងបន្លាស់ដែលលក់ច្រើនបំផុតប្រចាំឆ្នាំ',
                    font: {
                        size: 20
                    }
                }
            }
        },
    };
    const annualSaleAccessoriesReport = new Chart(document.getElementById("annual-sale-accessories-report"), config); 
}