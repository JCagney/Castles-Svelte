export class CastleService {
    castleList = [];
    userList = [];
    baseUrl = "";
  
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async getCastles() {
      try {
        const response = await fetch(this.baseUrl + "/api/castles")
        this.castleList = await response.json();
        return this.castleList;
      } catch (error) {
        return [];
      }
    }

    async getUsers() {
        try {
          const response = await fetch(this.baseUrl + "/api/users")
          this.userList = await response.json();
          return this.userList;
        } catch (error) {
          return [];
        }
    }
  }