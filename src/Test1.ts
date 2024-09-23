import { Utils } from "./Utils";
import axios, { AxiosResponse } from "axios";

const unit_test = () => {
    
    //test add
    if (Utils.add(1, 2) === 3) {
    }
    else {
        console.log(1);
        return
    }

    //test add
    async function test_json_placeholder() {
        const data: any = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        try {
            const response: any = await axios.post('https://jsonplaceholder.typicode.com/users', data);
            console.log(response)

            const correct_result = {
                id: 101,
                title: 'foo',
                body: 'bar',
                userId: 1,
                userIdxxx: 1
            } as any

            const keys: string[] = Object.keys(correct_result);
            console.log(keys)
            keys.forEach(key => {
                console.log(correct_result[key] + " " + response[key])
                if (correct_result[key] !== response[key]) {
                    console.log(1)
                    return
                }
            })
        } catch (error) {
            console.log(1)
        }
    }
}

unit_test()


