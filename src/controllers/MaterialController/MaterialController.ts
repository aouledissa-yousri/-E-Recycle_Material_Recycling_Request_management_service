import { MaterialService } from '../../services/MaterialService/MaterialService';



export abstract class MaterialController {

    public static getMaterials(request){
        return MaterialService.getMaterials()
    }
}