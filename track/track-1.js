/*
 * @desctiption 
 */

const track = 'data.code';
const res = {
    data: {
        code: 200
    }
};
const data = 404;

const trackFunctory = (res, track, data) => {
    const splitKeys = (key, vNode) => {
        const keyArr = key.split('.');
        let name = vNode;
        let str = 'that';
        for (let i of keyArr) {
            name = name[i];
            str += "['" + i + "']";
        }

        return {
            funStr: str,
            value: name
        };
    };

    const strObj = splitKeys(track, res);
    const name = data;
    //const name = strObj.value.replace(/[^\d]/g, '').replace(/^0$/, '');
    const str = strObj.funStr + '=' + '"' + name + '"';

    new Function('that', str)(res);
};

trackFunctory(res, track, data); // change and it's easy
console.log(res);
