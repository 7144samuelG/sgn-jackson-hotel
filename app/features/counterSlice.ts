import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface HotelState{
    singleR:number
    sdoubleR:number
    stwinR:number
    stripleR:number
    sfamily:number
    bsingleR:number
    bdoubleR:number
    btwinR:number
    btripleR:number
    bfamily:number
    cdouble:number
    ctwin:number
}
const initialState:HotelState={
    singleR:0,
    sdoubleR:0,
    stwinR:0,
    stripleR:0,
    sfamily:0,
    bsingleR:0,
    bdoubleR:0,
    btwinR:0,
    btripleR:0,
    bfamily:0,
    cdouble:0,
    ctwin:0
}
export const hotelBooking=createSlice({
    name:'hotelStatus',
    initialState,
    reducers:{
        singleRIncrement:(state)=>{
            if(state.singleR>5){
                state.singleR=5
            }
            else{
            state.singleR+=1
            }
        },
        singleRDecrement:(state)=>{
            state.singleR-=1
        },
        doubleRIncrement:(state,action: PayloadAction<number>)=>{
            state.sdoubleR=action.payload
        },
        doubleRDecrement:(state,action: PayloadAction<number>)=>{
            state.sdoubleR=action.payload
        },
        twinRIncrement:(state,action: PayloadAction<number>)=>{
            state.stwinR=action.payload
        },
        twinRDecrement:(state,action: PayloadAction<number>)=>{
            state.stwinR=action.payload
        },
        tripplerRIncrement:(state,action: PayloadAction<number>)=>{
            state.stripleR=action.payload
        },
        tripplerRDecrement:(state,action: PayloadAction<number>)=>{
            state.stripleR=action.payload
        },
        familyRIncrement:(state,action: PayloadAction<number>)=>{
            state.sfamily=action.payload
        },
        familyRDecrement:(state,action: PayloadAction<number>)=>{
            state.sfamily=action.payload
        },
        bsingleRIncrement:(state)=>{
            if(state.bsingleR>5){
                state.bsingleR=5
            }
            else{
            state.bsingleR+=1
            }
           
        },
        bsingleRDecrement:(state)=>{
            state.bsingleR-=1
        },
        bdoubleRIncrement:(state,action: PayloadAction<number>)=>{
            state.bdoubleR=action.payload
        },
        bdoubleRDecrement:(state,action: PayloadAction<number>)=>{
            state.bdoubleR=action.payload
        },
        btwinRIncrement:(state,action: PayloadAction<number>)=>{
           state.btwinR=action.payload
        },
        btwinRDecrement:(state,action: PayloadAction<number>)=>{
            state.btwinR=action.payload
        },
        btripplerRIncrement:(state,action: PayloadAction<number>)=>{
            state.btripleR=action.payload
        },
        btripplerRDecrement:(state,action: PayloadAction<number>)=>{
            state.btripleR=action.payload
        },
        bfamilyRIncrement:(state,action: PayloadAction<number>)=>{
            state.bfamily=action.payload
        },
        bfamilyRDecrement:(state,action: PayloadAction<number>)=>{
            state.bfamily=action.payload
        },
        ctripplerRIncrement:(state,action: PayloadAction<number>)=>{
            state.cdouble=action.payload
        },
        ctripplerRDecrement:(state,action: PayloadAction<number>)=>{
            state.cdouble=action.payload
        },
        cfamilyRIncrement:(state)=>{
            if(state.ctwin>5){
                state.ctwin=5
            }
            else{
            state.ctwin+=1
            }
        },
        cfamilyRDecrement:(state)=>{
            state.ctwin-=1
        }
    }
})
export const {singleRIncrement,singleRDecrement,
    doubleRDecrement,doubleRIncrement,twinRDecrement,twinRIncrement,tripplerRDecrement,
    tripplerRIncrement,familyRDecrement,familyRIncrement,bsingleRDecrement,bsingleRIncrement,
bdoubleRDecrement,bdoubleRIncrement,btwinRDecrement,btripplerRDecrement,btripplerRIncrement,
btwinRIncrement,bfamilyRDecrement,
bfamilyRIncrement,ctripplerRDecrement,cfamilyRDecrement,cfamilyRIncrement,ctripplerRIncrement}=hotelBooking.actions;
export default hotelBooking.reducer;  