function get(key, valorPorDefecto){
    if(localStorage.getItem(key) === null){
        return valorPorDefecto;
    }
    else {
        return JSON.parse(localStorage.getItem(key));
    };
};

function set(key, valor) {
    localStorage.setItem(key,JSON.stringify(valor));
}

const ls = {get,set};

export default ls;