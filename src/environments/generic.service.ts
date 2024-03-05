import { environment } from "./enviroments";
import axios, { AxiosResponse } from "axios";

export class GenericService {
    private Apiurl: string = environment.apiUrl;
    
    public async list(endpoint: string): Promise<AxiosResponse> {
        return await axios.get(this.Apiurl + endpoint);

    }
    public async getBy(endpoint: string, filter: any): Promise<any | any[]> {
        console.log(this.Apiurl + endpoint);
        return await axios.get(this.Apiurl + endpoint + "/" + filter);
      } 
    
    
    
}
