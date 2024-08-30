// Мапінг ID на назви станцій
const stationNames = {
  90: 'Великий Любінь',
  91: 'Скнилів'
};

// Функція для форматування дати у вигляді години, хвилини, секунди з урахуванням часового поясу
function formatTime(dateTime) {
  const date = new Date(dateTime);
  date.setHours(date.getHours() + 3); // Додаємо 3 години

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const formatter = new Intl.DateTimeFormat('en-GB', options);
  const parts = formatter.formatToParts(date);
  const hours = parts.find(part => part.type === 'hour').value;
  const minutes = parts.find(part => part.type === 'minute').value;
  const seconds = parts.find(part => part.type === 'second').value;
  return `${hours}:${minutes}:${seconds}`;
}

// Функція для отримання даних з бекенду
async function fetchLogs() {
  try {
    const response = await fetch('http://localhost:3000/diris-logs'); // URL до вашого бекенду
    const data = await response.json();
    updateTable(data); // Оновлює таблицю тільки з новими даними
    updateLastUpdateTime();
  } catch (error) {
    console.error('Failed to fetch data', error);
  }
}

// Функція для оновлення таблиці з даними
function updateTable(logs) {
  const logsTable = document.getElementById('logsTable');
  logsTable.innerHTML = ''; // Очищаємо таблицю перед додаванням нових даних

  // Додаємо заголовки
  const headers = `
    <thead>
      <tr>
        <th></th>
        <th>${stationNames[90]}</th>
        <th>${stationNames[91]}</th>
      </tr>
    </thead>
  `;
  logsTable.innerHTML += headers;

  // Додаємо дані
  const legend = `
     <tbody>
        <tr>
          <td class="legend">Time</td>
          <td class="data-cell">${formatTime(logs.find(log => log.diris_id === 90)?.time || '')}</td>
          <td class="data-cell">${formatTime(logs.find(log => log.diris_id === 91)?.time || '')}</td>
        </tr>
        <tr>
          <td class="legend">P</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.pa_p }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.pa_p }</td>
        </tr>
        <tr>
          <td class="legend">Q</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.pa_r }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.pa_r }</td>
        </tr>
         <tr>
          <td class="legend">S</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.pa_s }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.pa_s }</td>
        </tr>
        <tr>
          <td class="legend">cos φ</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.pa }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.pa }</td>
        </tr>
        <tr>
          <td class="legend">IL1</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.i1 }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.i1 }</td>
        </tr>
        <tr>
          <td class="legend">IL2</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.i2 }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.i2 }</td>
        </tr>
        <tr>
          <td class="legend">IL3</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.i3 }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.i3 }</td>
        </tr>
        
        
        <tr>
          <td class="legend">U12</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.u12 }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.u12 }</td>
        </tr>
        <tr>
          <td class="legend">U23</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.u23 }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.u23 }</td>
        </tr>
        <tr>
          <td class="legend">U31</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.u31 }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.u31 }</td>
        </tr>
        <tr>
          <td class="legend">F</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 90)?.f }</td>
          <td class="data-cell">${logs.find(log => log.diris_id === 91)?.f }</td>
        </tr>
      </tbody>
  `;
  logsTable.innerHTML += legend;
}

// Функція для оновлення часу останнього запиту
function updateLastUpdateTime() {
  const lastUpdate = document.getElementById('lastUpdate');
  const currentTime = new Date().toLocaleTimeString(); // Поточний час у форматі HH:MM:SS
  lastUpdate.textContent = `Last update: ${currentTime}`;
}

// Спочатку отримуємо дані, потім встановлюємо інтервал на 10 секунд
fetchLogs();
setInterval(fetchLogs, 10000);
