/*
=========================================
NewsOS TV Manager
=========================================
*/

async function loadTVServices() {

    try {

        const response = await fetch("content/tv.json");
        const services = await response.json();

        let html = `
            <h2>📺 Streaming Services</h2>
            <div class="card-grid">
        `;

        services.forEach(service => {

            html += `
                <div class="news-card"
                     onclick="window.open('${service.url}', '_blank')">

                    <img src="${service.logo}" alt="${service.name}">

                    <h3>${service.name}</h3>

                    <p>${service.description}</p>

                </div>
            `;

        });

        html += `
            </div>
        `;

        return html;

    } catch (error) {

        console.error(error);

        return "<h2>Unable to load TV Services.</h2>";

    }

}