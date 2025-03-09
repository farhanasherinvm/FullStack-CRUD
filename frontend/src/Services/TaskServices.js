import axios from "axios";

// const API_URL="http://127.0.0.1:8000/api/tasks/"
// const API_URL = "http://127.0.0.1:8000/api/tasks/tasks/";
const API_URL = "http://localhost:8000"

// export const fetchtasksapi=async()=>{
//     const response=await axios.get(API_URL);
//     return response.data
// }



// export const fetchtasksapi = async () => {
//   try {
//     const response = await axios.get(API_URL, {
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("API Error:", error.message);
//     console.error("Full Error:", error);
//     throw error;
//   }
// };


export const fetchtasksapi = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/tasks/');
        console.log("frontend dataaaaa",response)
        
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

export const createtaskapi= async(taskdata)=>{
    const response= await axios.post(API_URL,taskdata);
    return response.data
}

export const updatetaskapi=async (id,updatedata)=>{
    const response=await axios.put(`${API_URL}${id}/`,updatedata)
    return response.data;
}

export const deletetaskapi=async(id)=>{
    await axios.delete(`${API_URL}${id}/`)
    return id;
}