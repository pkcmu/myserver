import axios from "axios";


function helloworld(): string {
    return "hello world";
}

function add(a: number, b: number): number {
    return a + b;
}

async function getUser(data:any): Promise<any> {
    const response: any = await axios.post('https://jsonplaceholder.typicode.com/users', data);
    return response;
   
}

export const Utils = { add, getUser }