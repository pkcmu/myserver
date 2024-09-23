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

    //test getUser
    const data: any = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    try {
        const response: any = await Utils.getUser(data);
        const correct_result = {
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
        } as any

        const keys: string[] = Object.keys(correct_result);
        for(const k of keys){
            if (correct_result[k] !== response.data[k]) {
                console.log('error at key'+k)
                return
            }
        }
        
    } catch (error) {
        console.log('error connection to database')
        return
    }
    

}

unit_test()


