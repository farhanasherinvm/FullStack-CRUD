import  {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {fetchtasksapi,createtaskapi,updatetaskapi,deletetaskapi} from "../Services/TaskServices"

// export const fetchTasks= createAsyncThunk("tasks/fetchtasks",async()=>{
//     return await fetchtasksapi()
// })
export const fetchTasks = createAsyncThunk("tasks/fetchtasks", async () => {
    try {
        const response = await fetchtasksapi();
        console.log("API Response:", response); // Check API response
        return response;
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
});


export const createtask= createAsyncThunk("tasks/createtask", async(taskdata)=>{
    return await createtaskapi(taskdata)
})

export const updatetask= createAsyncThunk("tasks/updatetask",async(updatedata)=>{
    return await updatetaskapi(updatedata)
})

export const deleteTask= createAsyncThunk("tasks/deletetask",async(id)=>{
    return await deletetaskapi(id)
})

export const taskSlice= createSlice({
    name:"tasks",
    initialState:{
        tasks:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchTasks.pending,(state)=>{state.loading=true})
            .addCase(fetchTasks.fulfilled,(state,action)=>{
                state.loading=false;
                state.tasks=action.payload
            })
            .addCase(fetchTasks.rejected,(state,action)=>{
                state.loading=false
                state.error=action.error.message
            })
            .addCase(createtask.fulfilled,(state,action)=>{
                state.tasks.push(action.payload)
            })
            .addCase(updatetask.fulfilled,(state,action)=>{
                const index=state.tasks.findIndex(task=>task.id === action.payload.id)
                state.tasks[index]=action.payload
            })
            .addCase(deleteTask.fulfilled,(state,action)=>{
                state.tasks=state.tasks.filter(task=>task.id!==action.payload)
            })

    }

})

export default taskSlice.reducer

