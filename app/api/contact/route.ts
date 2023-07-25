import { NextResponse,NextRequest } from "next/server";
const fs=require('fs');
const path=require("path");
export async function POST(request:NextRequest){
    
    const data=await request.json()
    console.log(data,"hello there")
    const filePath=path.resolve(process.cwd(),"app/data/submission.json");
    let submission:any=[];
    try{
        const data=fs.readFileSync(filePath,"utf8");
        submission=JSON.parse(data)
    }
    catch(err){
        console.log("error reading this file ..",err)
    }
    submission.push(data);
    console.log(data)
    try{
        const newData=submission.stringify(submission,null,2);
        fs.writeFileSync(filePath,newData,"utf8")
    }catch(err){
        console.error("error whwn writing to this file..",err)
    }
    return NextResponse.json({
        
        message:"this message has been sent successufully"
    })
}
// export async function GET(){
//     return NextResponse.json({
//         message:"its time to code"
//     })

// }