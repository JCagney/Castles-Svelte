import { writable } from "svelte/store";

export const mainBar = [
    
    {
    title: "Add Castle",
    icon: "fas fa-chess-rook fa-3x",
    colour: "color:rgb(92, 73, 79)",
    link: "/#/addcastle",
    },
    {    
    title: "Castles",
    icon: "fas fa-th-list fa-3x",
    colour: "color:rgb(92, 73, 79)",
    link: "/#/castles",
  }, {
    title: "People",
    icon: "fas fa-users fa-3x",
    colour: "color:rgb(92, 73, 79)",
    link: "/#/people",
  }, 
  {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
  }];

export const welcomeBar = [
  {
    title: "Sign Up",
    icon: "fas fa-user-cog fa-3x",
    colour: "color:rgb(63, 160, 155)",
    link: "/#/signup",
  },
  {
    title: "Log In",
    icon: "fas fa-user-edit fa-3x",
    colour: "color:green",
    link: "/#/login",
  },
];

export const navBar = writable({
  bar: [],
});
export const title = writable("");
export const subTitle = writable("");

export const user = writable({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  _id: ""
});

export const castleid = writable("");