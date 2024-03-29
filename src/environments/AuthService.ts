import axios from "axios";
import { environment } from "./enviroments";

export class AuthService{

    private Apiurl: string = environment.apiUrl;
    public isAuth: boolean = false;

    public async login(usuario:any){
     try {
        const response = await axios.post(this.Apiurl + "Auth/login", usuario);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("currentMember", JSON.stringify(response.data.usuario)
        );
        return usuario;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
    public async register(usuario:any){
        try {
            const response = await axios.post(this.Apiurl + "Auth/registro", usuario);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}