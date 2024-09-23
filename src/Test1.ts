import { Utils } from "./Utils";
import axios, { AxiosResponse } from "axios";

const unit_test = async () => {
    //test add
    if (Utils.add(1, 2) === 3) {
    }
    else {
        console.log(1);
        return
    }

    //test add
    const data: any = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    try {
        const response: any = await axios.post('https://jsonplaceholder.typicode.com/users', data);

        const correct_result = {
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
        } as any

        const keys: string[] = Object.keys(correct_result);
        console.log("12345")
        return

        for(const k of keys){
            if (correct_result[k] !== response.data[k]) {
                console.log(1)
                return
            }
        }

    } catch (error) {
        console.log(1)
        return
    }
}

unit_test()


