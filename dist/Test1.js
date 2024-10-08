"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    //test add
    if (Utils_1.Utils.add(1, 2) === 3) {
    }
    else {
        console.log(1);
        return;
    }
    //test getUser
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    try {
        const response = yield Utils_1.Utils.getUser(data);
        const correct_result = {
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        const keys = Object.keys(correct_result);
        for (const k of keys) {
            if (correct_result[k] !== response.data[k]) {
                console.log('error at key' + k);
                return;
            }
        }
    }
    catch (error) {
        console.log('error connection to database');
        return;
    }
});
unit_test();
