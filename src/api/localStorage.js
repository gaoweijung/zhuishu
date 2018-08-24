const localStorage = window.localStorage

export default {
    staticPath: 'http://statics.zhuishushenqi.com',

    getLocalData(item){
        return (localStorage.getItem(item) === '{}') ? null : JSON.parse(localStorage.getItem(item));
    },
    
    setLocalData(item,obj){
        localStorage.setItem(item,JSON.stringify(obj));
    }
}