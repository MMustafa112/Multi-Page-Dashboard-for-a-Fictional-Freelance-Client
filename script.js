// 1. SPA ROUTING
function showPage(pageId, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    btn.classList.add('active');
}

// 2. CHART.JS (Purple Flow Theme)
const ctx = document.getElementById('voidRevenueChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        datasets: [{
            label: 'REVENUE',
            data: [1200, 1900, 1700, 2400, 2100, 2800],
            borderColor: '#9d00ff',
            backgroundColor: 'rgba(157, 0, 255, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { grid: { color: '#222' }, ticks: { color: '#666' } },
            x: { grid: { display: false }, ticks: { color: '#666' } }
        }
    }
});

// 3. PROJECT DATA
const projects = [
    { id: "PROJ_CYBER_X", status: "STABLE", time: "2D_REMAIN" },
    { id: "NODE_UPLINK", status: "SYNCING", time: "5H_REMAIN" },
    { id: "GHOST_DATA", status: "PENDING", time: "EXP_MAY" }
];

const pRows = document.getElementById('project-rows');
projects.forEach(p => {
    pRows.innerHTML += `<tr><td>${p.id}</td><td style="color: #9d00ff">${p.status}</td><td>${p.time}</td></tr>`;
});

// 4. PERSISTENCE & SETTINGS
function syncProfile() {
    const name = document.getElementById('input-name').value;
    localStorage.setItem('void_name', name);
    document.getElementById('display-name').innerText = name.toUpperCase();
    
    const btn = document.querySelector('.void-btn');
    btn.innerText = "SYNCING...";
    setTimeout(() => { btn.innerText = "SYNC_COMPLETE"; }, 1000);
}

// Load Name on Boot
window.onload = () => {
    const saved = localStorage.getItem('void_name');
    if(saved) {
        document.getElementById('display-name').innerText = saved.toUpperCase();
        document.getElementById('input-name').value = saved;
    }
};

// Clock
setInterval(() => {
    document.getElementById('live-clock').innerText = new Date().toLocaleTimeString() + " UTC";
}, 1000);
