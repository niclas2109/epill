import axios from "axios";
import Cookies from "universal-cookie";

class User {
    constructor() {
        this.reset();
        const cookies = new Cookies();
        const auth = cookies.get('auth');
        if (auth) {
            this.setCookieCredentials(auth);
        }
    }

    setCookieCredentials(credentials) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${credentials.token}`;
        this.set(credentials.user);
    }

    set(data) {
        this.username	= data.username;
        this.firstname	= data.firstname;
        this.lastname	= data.lastname;
        this.id = data.id;
    }

    reset() {
        this.username = undefined;
        this.firstname = undefined;
        this.lastname = undefined;
        this.id = -1;
    }

    isAuthenticated() {
        return this.username && this.id != -1;
    }

    isNotAuthenticated() {
        return !this.isAuthenticated();
    }
}

// Singleton pattern in ES6.
export default (new User);