export default {
    install(Vue){
        Vue.prototype.$base64 = (file) => {
            console.log("dorf")
            return new Promise((res, rej) => {
                var reader = new FileReader(file);
                reader.readAsDataURL(file);
                reader.onload = () => {
                    res(reader.result);
                }

                reader.onerror = (error) => {
                    rej(error)
                };
            })
        }
    }
};