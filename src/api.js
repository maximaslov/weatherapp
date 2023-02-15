import axios from "axios";

export const WeatherApi = {


    getCityWeather(city, lang, scale) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${scale}&lang=${lang}&appid=c40ad0a49abf7f15d606b0bce470a069`);
    },

    getLocationWeather(coords, lang, scale) {
        const {latitude, longitude} = coords;
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${scale}&lang=${lang}&appid=c40ad0a49abf7f15d606b0bce470a069`)
            // .then((res) => console.log(res));
    }
        

    // post(company) {
    //     return axios.post(URL, company);
    // },

    // put(currentCompany, newFriendsList) {
    //     return axios.put(URL+currentCompany.id, {...currentCompany, friends: newFriendsList});
    // },
}