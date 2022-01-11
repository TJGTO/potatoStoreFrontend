import axios from '../axios';

function loginWithEmailAndPassword(email:string, password:string){

    return new Promise(async(resolve,reject)=>{
        try{

            let response : any = await axios.post('/login',{
                email:email,
                password:password
            });

            if(response && response.data && response.data.success){
                resolve(response);
            }else{
                reject(response);
            }

        }catch(err){

            reject(err);
        } 
    });
}

export {loginWithEmailAndPassword}