// import axios from "axios";
const baseUrl = "https://api.sportmonks.com";
const token = "UWA1QyYzFsWOGqyuvw4jyTl8ArSGiojTPO4xZeVWMICpglgFW7RzYAaK0Rmm";

export const getDateWiseData = async (date) => {
    try {
        const res = await fetch(`${baseUrl}/v3/football/fixtures/date/${date}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
        });

        // Check if the response is OK (status 200)
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Parse and return the JSON response
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Re-throw the error so that React Query can handle it
    }
};

// export const GetData = async (date) => {

//     try {
//         const res = await axios.get(`${baseUrl}/v3/football/fixtures/date/${date}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`,
//             }
//         });
//         return res?.data;
//     } catch (error) {
//         console.log(error);
//     }
// }