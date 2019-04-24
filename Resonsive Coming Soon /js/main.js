const countdown = document.querySelector('.countdown');

// Set launch date
const launchDate = new Date('Dec 25, 2019 13:00:00').getTime();

//update every second
const intvl = setInterval(() => {
    // get todays date in milliseconds
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    //time calculations
    //days
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //hours
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //minutes
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //seconds
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display the results
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;
    //check launch date
    if (distance < 0) {
        //stop countdown
        clearInterval(intvl);
        
        countdown.style.color = '#17a2b8';
        countdown.innerhtml = 'Launched!';
    }

 }, 1000);