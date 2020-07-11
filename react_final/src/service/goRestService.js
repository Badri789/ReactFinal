import axios from "axios";

class GoRestService {
    _apiBase = 'https://gorest.co.in/public-api/';
    token = 'bx_27KgxGUg9LHRyHkBiFtMdxbYOCWPwDPQz';

    async registerUser(firstName, lastName, gender, email, status) {
        return await axios.post(`${this._apiBase}users`, {
            first_name: firstName,
            last_name: email,
            gender: gender,
            email: email,
            status: status
        },
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        )
    }

    async getPosts() {
        return await axios.get(`${this._apiBase}posts`,
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        );
    }

    async getPhotos() {
        return await axios.get(`${this._apiBase}photos`,
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        );
    }

    async getUserInformation(id) {
        return await axios.get(`${this._apiBase}users/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }
        );
    }
}

export default GoRestService;

