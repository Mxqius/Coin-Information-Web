fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1')
    .then(res => res.json())
    .then(json => {
        const container = document.querySelector('.container');
        const coins = Object.getOwnPropertyNames(json);

        coins.forEach((coin, index) => {
            const coinInfo = json[`${coin}`];
            const price = coinInfo.current_price;
            const change = coinInfo.price_change_24h.toFixed(5);

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="${coinInfo.image}">
                    </div>
                    <div class="coin-name">
                        <h3>${coinInfo.name}</h3>
                        <span>/USD</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
        `;
        });
    });