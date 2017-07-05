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
        this.id = data.id;
        this.username	= data.username;
        this.firstname	= data.firstname;
        this.lastname	= data.lastname;
        this.levelOfDetail		= data.levelOfDetail || 5;
        this.preferredFontSize	= data.preferredFontSize || 'defaultFontSize';
        this.redGreenColorblind	= data.redGreenColorblind || false;
    }

    reset() {
        this.username = undefined;
        this.firstname = undefined;
        this.lastname = undefined;
        this.levelOfDetail		= 5;
        this.preferredFontSize	= 100;
        this.redGreenColorblind	= false;
        this.id = -1;
    }

    isAuthenticated() {
        return this.username && this.id != -1;
    }

    isNotAuthenticated() {
        return !this.isAuthenticated();
    }
    
    
    setLevelOfDetail(value) {
        this.levelOfDetail = value;
    }
    
    setPreferredFontSize(value) {
        this.preferredFontSize = value;
    }
    
    setRedGreenColorblind(value) {
    		this.redGreenColorblind	= value;
    }
}

// Singleton pattern in ES6.
export default (new User);