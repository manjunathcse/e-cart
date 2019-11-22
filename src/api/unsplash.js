import axios from "axios";

export default axios.create({
    //baseURL: "https://api.unsplash.com",
    baseURL: "https://api.myjson.com"//,
    /*headers: {
        Authorization:
            "Client-ID 0d9534dd500228198e370388f63a376792de5bb4dd8e2573bac239e624e616fe"
    }*/
});
