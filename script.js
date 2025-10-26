const apiUrl = 'https://api.lynnux.xyz/other/request?site=http://37.114.36.60:1031/botStats';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const guildCountElement = document.getElementById('guildCount');
        const userCountElement = document.getElementById('userCount');

        if (guildCountElement && userCountElement) {
            guildCountElement.textContent = data.guildCount;
            userCountElement.textContent = data.userCount;
        }
    })
    .catch(error => {
        console.error('Error while requesting the API:', error);
    });
