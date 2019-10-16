// create new instances of weather and UI and pass the zip code in.
// will eventually add an update class that creats new instances on zipcode change
// would be prudent to create an event listener that creates a new weather instance 
// change these declarations to have onLoad event fire them for first load
const weather = new Weather(24073);
const ui = new UI();

// get initial weather data from weather class and create UI elements
weather.getWeather().then(res => {
    ui.displayDaysOfWeek(res)
    ui.createCardContent(res);
});

// change tabs using UI class
const ul = document.querySelector("ul").addEventListener("click", ui.changeTabs);

