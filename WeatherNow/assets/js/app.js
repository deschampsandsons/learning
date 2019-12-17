//https://www.youtube.com/watch?v=wPElVpR1rwA

window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDescription = document.querySelector('.tempDescription');
    let tempDegree = document.querySelector('.tempDegree');
    let locationTimezone = document.querySelector('.locationTimezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}https://api.darksky.net/forecast/b6697864070e1222b3d0bb7b447234e6/${lat},${long}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log (data);
                const {temperature, summary} = data.currently;
                //set DOM Elements from API
                tempDegree.textContent = temperature
                tempDescription.textContent = summary
                locationTimezone.textContent = data.timezone
            });
        });
    };
});