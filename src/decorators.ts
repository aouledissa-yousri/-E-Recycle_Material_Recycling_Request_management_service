import jwtDecode from "jwt-decode"
import { InvalidTokenError } from "jwt-decode"

export function checkAccessToken(token){

    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor){
        
        try{
            jwtDecode(token)
            return descriptor

        }catch(error: any){

            if(error instanceof InvalidTokenError){
                descriptor.value = async function() {
                    return {"message": "invalid token"}
                }
            }
        }
    }
}