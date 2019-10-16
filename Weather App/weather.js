class Weather{
    constructor(zipCode) {
        this.zipCode = zipCode;
        this.apiKey = 'b676c957ce7c4239b6c957ce7c1239f7';
        this.url = `https://api.weather.com/v3/wx/forecast/daily/5day?postalKey=${this.zipCode}:US&units=e&language=en-US&format=json&apiKey=${this.apiKey}`
    }

    async getWeather() {
        const res = await fetch(this.url)
        return res.json();



        
    }

    

}