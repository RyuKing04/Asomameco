import axios from "axios";
import { environment } from "./enviroments";

export class AuthService{

    private Apiurl: string = environment.apiUrl;
    public isAuth: boolean = false;

    public async login(usuario:any){
     try {
        const response = await axios.post(this.Apiurl + "auth", usuario);
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
}