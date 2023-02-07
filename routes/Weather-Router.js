const router = require("express").Router();

// location for Frisco 
router.route("/").get(async (req, res) => {
    try {
        let weather_info =  await fetch("https://api.open-meteo.com/v1/forecast?latitude=33.15&longitude=-96.82&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&timezone=auto");
        weather_info = await weather_info.json();
        const {temperature, time} = weather_info.current_weather;

        const result = {
            temperature_f:temperature,
            time:time
        };

        res.json(result);
        
    } catch (error) {
        console.error(error.message)
    }

});

module.exports = router;