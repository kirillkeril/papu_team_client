import {makeAutoObservable} from "mobx";
import UserService from "../services/user.service";

export default class Store {
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(isAuth) {
        this.isAuth = isAuth;
    }
    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const user = await UserService.login(email, password);
            localStorage.setItem('token', user.data.accessToken);
            this.setUser(user);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async register(email, password) {
        try {
            const user = await UserService.register(email, password);
            localStorage.setItem('token', user.data.accessToken);
            this.setUser(user);
            this.setAuth(true);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async logout(email, password) {
        try {
            const user = await UserService.logout();
            localStorage.removeItem('token');
            this.setUser(null);
            this.setAuth(false);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}