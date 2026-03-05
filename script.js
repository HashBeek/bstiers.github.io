// Datos de ejemplo (agrega más)
const data = {
    overall: [
        { player: 'GabrielBS', region: 'LATAM', tier: 'CR1' },
        { player: 'ProKiller', region: 'SEA', tier: 'CR2' },
        { player: 'SniperGod', region: 'EU', tier: 'SL1' },
        // Más...
    ],
    arena: [
        // Similar...
    ],
    // Repite para sniper, escopeta, subfusil
};

// Función para cargar tablas
function loadTable(section, bodyId) {
    const tbody = document.getElementById(bodyId);
    data[section].forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>\( {row.player}</td><td> \){row.region}</td><td class="tier-\( {row.tier.toLowerCase().replace(/\d/g, '')}"> \){row.tier}</td>`;
        tbody.appendChild(tr);
    });
}

// Cargar todas al inicio
loadTable('overall', 'overall-body');
// Repite para otras secciones

// Búsqueda
document.getElementById('search').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.leaderboard tbody tr').forEach(tr => {
        const text = tr.textContent.toLowerCase();
        tr.style.display = text.includes(term) ? '' : 'none';
    });
});