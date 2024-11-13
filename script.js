document.addEventListener('DOMContentLoaded', function () {
    // Sales Data Analysis Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Sales ($)',
                data: [3000, 2500, 3500, 4200, 5000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Customer Segmentation Chart
    const customerCtx = document.getElementById('customerChart').getContext('2d');
    const customerChart = new Chart(customerCtx, {
        type: 'pie',
        data: {
            labels: ['Segment A', 'Segment B', 'Segment C'],
            datasets: [{
                data: [40, 30, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverOffset: 4
            }]
        }
    });
});

