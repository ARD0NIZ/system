const apiUrl = 'https://api.lynnux.xyz/other/request?site=http://37.114.36.60:1031/botStats';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API-Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const guildCount = data.guildCount;
        const userCount = data.userCount;

        document.getElementById('userCount').textContent = userCount;
        document.getElementById('guildCount').textContent = guildCount;
    })
    .catch(error => {
        console.error('Error at request the API:', error);
    });
