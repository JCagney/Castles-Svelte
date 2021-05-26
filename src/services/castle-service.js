import axios from "axios";
import { user } from  "../stores"

export class CastleService {
    castleList = [];
    userList = [];
    categoriesList = [];
    baseUrl = "";
    castle = {};
  
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
      if (localStorage.castletoken) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.castletoken);
        //const user = this.getCurrentUser(); 
      }
    }
  
    async getCastles() {
      try {
        const response = await axios.get(this.baseUrl + "/api/castles")
        this.castleList = await response.data;
        return this.castleList;
      } catch (error) {
        return [];
      }
    }

    async getCastle(castleid) {
      try {
        const response = await axios.get(this.baseUrl + "/api/castle/" + castleid)
        this.castle = await response.data;
        return this.castle;
      } catch (error) {
        return null;
      }
    }

    async rateCastle(castleid, rating){
      try{
        const response = await axios.get(this.baseUrl + "/api/castle/" + castleid +"/"+ rating)
        return response
      }catch (error) {
        return error
      }
    }

    //get array of ratings foor Castle and return the average rating 
    async getCastleRating(castleid){
      try{
        const response = await axios.get(this.baseUrl + "/api/castle/" + castleid);
        const ratings = await response.data.ratings;
        let total = 0; 
        for (var i = 0; i < ratings.length; i++){
          total = total + parseInt(ratings[i]);
        }
        let average = Math.round(total / ratings.length); 
        return average; 
      }catch (error) {
        return 0;
      }
    }

    async deleteCastle(castleid) {
      try {
      const response = await axios.delete(this.baseUrl + "/api/castle/" + castleid)
      return response; 
    } catch (error) {
      return {};
    }
  }

    async getCategories() {
      try {
        const response = await axios.get(this.baseUrl + "/api/categories")
        this.categoriesList = await response.data;
        return this.categoriesList;
      } catch (error) {
        return [];
      }
    }

    async getUsers() {
        try {
          const response = await axios.get(this.baseUrl + "/api/users")
          this.userList = await response.data;
          return this.userList;
        } catch (error) {
          return [];
        }
    }

    async getCurrentUser(){
      const response = await axios.get(this.baseUrl + "/api/users/token/");
      const user = response.data
      return user;
    }


    async login(email, password) {
      try {
        const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        if (response.data.success) {
          // this method returns user info for a valid email address, the info is then added to the user store 
          const checkresponse = await axios.get(this.baseUrl + "/api/users/checkemail/" + email);
          const authuser = checkresponse.data;
          user.set({
            firstName: authuser.firstName,
            lastName: authuser.lastName,
            email: email,
            _id: authuser._id,
            token: response.data.token
          });
          localStorage.castletoken = JSON.stringify(response.data.token);
          localStorage.userid = JSON.stringify(authuser._id);
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
    }

    async logout() {
      user.set({
        firstName: "",
        lastName: "",
        email: "",
        _id: "",
        token: ""
      });
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.castletoken = null;
      localStorage.userid = null;
    }

    async signup(newfirstName, newlastName, newemail, newpassword) {
     
     // check DB for email alreaady registered  
     const response = await axios.get(this.baseUrl + "/api/users/checkemail/" + newemail);
     console.log(response); 
     if (response.status == 204){
       try{ 
         const user = {
          firstName: newfirstName, 
          lastName: newlastName, 
          email: newemail, 
          password: newpassword
         }
        const response = await axios.post(`${this.baseUrl}/api/users`, user);
        return response;
      } catch (error) {
        return false;
      } 
     }

    }

    async addCastle(castle_name, castle_description, castle_coordinates, castle_category, castle_user){
      try {

        const newCastle = {
          name: castle_name,
          description: castle_description,
          coordinates: castle_coordinates,  
          category: castle_category,
          user: castle_user
        };
        const response = await axios.post(`${this.baseUrl}/api/castle`, newCastle);
        console.log(response)
        return response.status;
      } catch (error) {
        return false;
      }
    }

    async editCastle(castleid, castle_name, castle_description, castle_coordinates, castle_category, castle_user){
      try {

        const edit = {
          id: castleid,
          name: castle_name,
          description: castle_description,
          coordinates: castle_coordinates,  
          category: castle_category,
          userid: castle_user
        };
        const response = await axios.post(`${this.baseUrl}/api/castle/edit`, edit);
        console.log(response)
        return response.status;
      } catch (error) {
        return false;
      }
    }



    async getReviews(castleid){
      try {
        //get all reviews with this castle id in them 
        const response = await axios.get(this.baseUrl + "/api/reviews/castle/" + castleid);
        const reviews = response.data; 
        return reviews;
        } catch (error) {
          return [];
        }
    }

    async postReview(reviewtext, userid, castleid){
      try {
        const review = {
          text: reviewtext, 
          author: userid, 
          castle: castleid
        }
        const response = await axios.post(`${this.baseUrl}/api/review`, review);
        return response.status;
      } catch (error) {
        return false;
      }
    }

    

  }