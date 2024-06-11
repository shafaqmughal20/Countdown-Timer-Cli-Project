#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns/differenceInSeconds";


const res =await inquirer.prompt({
     name:"userInput",
     type:"number",
     message:"please Enter the amount of second ",
     validate:(input)=> {
        if (isNaN(input)){
            return "please Enter valid Number"
        }else if (input > 60){
            return "Secons must be in 60"
        }else{
            return true;
        }
     }
});
let input = res.userInput

function startTime (val:number){
    const intTime= new Date().setSeconds(new Date().getSeconds()+ val)
    const intervalTime = new Date(intTime);
    setInterval(()=>{
const currentTime = new Date()
const timeDiff = differenceInSeconds(intervalTime,currentTime)
        if (timeDiff <= 0){
            console.log('Time has Expired')
            process.exit()
        }
        const minute = Math.floor((timeDiff% (3600*24))/ 3600)
        const second = Math.floor(timeDiff% 60);
        console.log(`${minute.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`);
    },1000)
}
startTime(input)
