import { environment } from "./enviroments";
import axios, { AxiosResponse } from "axios";

export class GenericService {
    private apiUrl: string = environment.apiUrl;
    
    public async get<T>(url: string): Promise<AxiosResponse<T>> {
        return await axios.get<T>(this.apiUrl + url);
    }
 
    
    
    
}
