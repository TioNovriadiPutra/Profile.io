const BASE_URL = "http://10.0.2.2:3333";

const AUTH_PREFIX = "/auth";
const SPECIALITY_PREFIX = "/speciality";
const USER_PREFIX = "/user";
const FEEDS_PREFIX = "/feeds";
const PORTO_PREFIX = "/porto";

export const API_ACCESS = {
  login: BASE_URL + AUTH_PREFIX + "/login",
  register: BASE_URL + AUTH_PREFIX + "/register",
  allSpeciality: BASE_URL + SPECIALITY_PREFIX + "/",
  showUserData: BASE_URL + USER_PREFIX,
  showOtherUserData: BASE_URL + USER_PREFIX + "/other",
  showUserCV: BASE_URL + USER_PREFIX + "/skill",
  addSkill: BASE_URL + USER_PREFIX + "/add-skill",
  updateUserData: BASE_URL + USER_PREFIX,
  follow: BASE_URL + USER_PREFIX + "/follow",
  unfollow: BASE_URL + USER_PREFIX + "/unfollow",
  suggestion: BASE_URL + USER_PREFIX + "/suggestion",
  storeFeeds: BASE_URL + FEEDS_PREFIX,
  allFeeds: BASE_URL + FEEDS_PREFIX,
  commentFeeds: BASE_URL + FEEDS_PREFIX + "/comment",
  like: BASE_URL + FEEDS_PREFIX + "/like",
  unlike: BASE_URL + FEEDS_PREFIX + "/unlike",
  createPorto: BASE_URL + PORTO_PREFIX,
  showUserPorto: BASE_URL + PORTO_PREFIX,
  deletePorto: BASE_URL + PORTO_PREFIX,
  showUserQuiz: BASE_URL + USER_PREFIX + "/quiz",
  submitQuiz: BASE_URL + USER_PREFIX + "/submit-quiz",
};

export const LOCAL_DRIVE = BASE_URL + "/uploads/";
export const PORTO_LOCAL_DRIVE = LOCAL_DRIVE + "porto/";
export const SUB_SPECIALITY_LOCAL_DRIVE = LOCAL_DRIVE + "sub-speciality/";
export const FEEDS_LOCAL_DRIVE = LOCAL_DRIVE + "feeds/";
