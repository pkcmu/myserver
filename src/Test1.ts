import { Utils } from "./Utils";
import axios, { AxiosResponse } from "axios";

//test add
if (Utils.add(1, 2) === 3) {
    console.log(0);
}
else {
    console.log(1);
}

//test add
async function test_json_placeholder() {
    const data: any = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    try {
        const response:any = await axios.post('https://jsonplaceholder.typicode.com/users', data);

        const correct_result = {
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
        } as any

        const keys:string[] = Object.keys(correct_result);
        keys.forEach(key=>{
            if(correct_result[key] !== response[key])
            {
                console.log(1)
            }
        })
    } catch (error) {
        console.log(1)
    }
}


