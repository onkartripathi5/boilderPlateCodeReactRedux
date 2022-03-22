const users = [
  {
    username: "Shivank",
    age: 32,
    likes: ["cricket", "footbal", "programming", "dhokebbaaji", "cancer jokes"],
    movies: [
      {
        title: "Prem Rantan Dhan Paayo",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 2,
      },
      {
        title: "Inceptions",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "PK",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Interstellar",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.1,
      },
      {
        title: "Shakti",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 1,
      },
    ],
    salary: 15000,
    favouriteColor: "Black",
  },
  {
    username: "Danniel",
    age: 25,
    likes: ["cricket", "batminton", "programming", "dhokebbaaji", "chess"],
    movies: [
      {
        title: "Dabang",
        relaseDate: new Date(
          "Thu Mar 8 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 2,
      },
      {
        title: "Inceptions",
        relaseDate: new Date(
          "Thu June 1 2011 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "Bahubali",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Baazigar",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.1,
      },
      {
        title: "Shakti",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 1,
      },
    ],
    salary: 35000,
    favouriteColor: "Pink",
  },
  {
    username: "Maan Singh",
    age: 27,
    likes: ["cricket", "footbal", "programming", "kabaddi", "foobaal"],
    movies: [
      {
        title: "Dhol",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 2,
      },
      {
        title: "Malamaal Wikely",
        relaseDate: new Date(
          "Thu May 22 2011 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Criminal Justis",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "Ghatak",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.1,
      },
      {
        title: "Diljale",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 1,
      },
    ],
    salary: 40000,
    favouriteColor: "Pink",
  },
  {
    username: "Harish",
    age: 22,
    likes: ["chess", "footbal", "programming", "ludo", "carrem"],
    movies: [
      {
        title: "Balika Badhu",
        relaseDate: new Date(
          "Thu Mar 5 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 2,
      },
      {
        title: "Nageen",
        relaseDate: new Date(
          "Thu June 15 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "Saas Bahu",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 8,
      },
      {
        title: "Pavitra Rishta",
        relaseDate: new Date(
          "Thu June 2 2005 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.1,
      },
      {
        title: "Sh",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 1,
      },
    ],
    salary: 20000,
    favouriteColor: "Black",
  },
  {
    username: "Ajeet",
    age: 23,
    likes: ["cricket", "batmiton", "programming", "chess", "reading"],
    movies: [
      {
        title: "Radhey",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Avengers",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "Bahubali 2",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Spiderman",
        relaseDate: new Date(
          "Thu June 25 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.1,
      },
      {
        title: "Shakti",
        relaseDate: new Date(
          "Thu Mar 11 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 1,
      },
    ],
    salary: 27000,
    favouriteColor: "Red",
  },
  {
    username: "Arvind",
    age: 25,
    likes: ["cricket", "footbal", "programming", "bollyball", "cancer jokes"],
    movies: [
      {
        title: "Mirzapur",
        relaseDate: new Date(
          "Thu Mar 10 2018 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.8,
      },
      {
        title: "Secred Game",
        relaseDate: new Date(
          "Thu May 10 2020 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "Baukaal",
        relaseDate: new Date(
          "Thu May 4 2012 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Apharan",
        relaseDate: new Date(
          "Thu June 26 2022 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 8.1,
      },
      {
        title: "Raktanchal",
        relaseDate: new Date(
          "Thu Mar 10 2022 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
    ],
    salary: 10000,
    favouriteColor: "Black",
  },
  {
    username: "Kaluva",
    age: 32,
    likes: ["cricket", "footbal", "programming", "chess", "reading"],
    movies: [
      {
        title: "Kaliya",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 7,
      },
      {
        title: "Inceptions",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "Dilwale 2",
        relaseDate: new Date(
          "Thu Mar 10 2006 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Shaaho",
        relaseDate: new Date(
          "Thu June 26 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 8.1,
      },
      {
        title: "Family Man",
        relaseDate: new Date(
          "Thu Mar 20 2020 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
    ],
    salary: 26000,
    favouriteColor: "Green",
  },
  {
    username: "Mohit",
    age: 34,
    likes: [
      "cricket",
      "footbal",
      "programming",
      "dhokebbaaji",
      "cancer jokes",
      "chess",
    ],
    movies: [
      {
        title: "Badal",
        relaseDate: new Date(
          "Thu Mar 10 2013 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Inceptions",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 4,
      },
      {
        title: "PK",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Udata Panjab",
        relaseDate: new Date(
          "Thu June 26 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.1,
      },
      {
        title: "Kabir Singh",
        relaseDate: new Date(
          "Thu Mar 10 2019 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
    ],
    salary: 26000,
    favouriteColor: "Black",
  },
  {
    username: "Sonu",
    age: 28,
    likes: ["chess", "footbal", "programming", "dhokebbaaji", "cancer jokes"],
    movies: [
      {
        title: "Luco",
        relaseDate: new Date(
          "Thu Mar 11 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 3,
      },
      {
        title: "Batti Gul Miter CHalu",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 4,
      },
      {
        title: "Ruhi",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Border",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.1,
      },
      {
        title: "Mela",
        relaseDate: new Date(
          "Thu Mar 11 2033 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 1,
      },
    ],
    salary: 15000,
    favouriteColor: "Black",
  },
  {
    username: "Dil Fake",
    age: 26,
    likes: ["cricket", "chess", "programming", "batmiton", "cancer jokes"],
    movies: [
      {
        title: "Kalicharan",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Murder",
        relaseDate: new Date(
          "Thu May 12 2030 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Jannat",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Jannat 2",
        relaseDate: new Date(
          "Thu June 23 2018 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.1,
      },
      {
        title: "Aksar",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 8,
      },
    ],
    salary: 28000,
    favouriteColor: "Green",
  },
  {
    username: "Dilbaag Singh",
    age: 35,
    likes: ["cricket", "footbal", "gutakha", "reading", "cancer jokes"],
    movies: [
      {
        title: "Surya Vansam",
        relaseDate: new Date(
          "Thu Mar 9 2019 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 2,
      },
      {
        title: "Coolie",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Shahanshah",
        relaseDate: new Date(
          "Thu Mar 20 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Toofan",
        relaseDate: new Date(
          "Thu Sept 30 2018 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 7.1,
      },
      {
        title: "Deewar",
        relaseDate: new Date(
          "Thu Mar 16 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
    ],
    salary: 29000,
    favouriteColor: "White",
  },
  {
    username: "Abhishek",
    age: 32,
    likes: ["movie", "footbal", "chess", "dhokebbaaji", "cancer jokes"],
    movies: [
      {
        title: "Hello Brother",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 2,
      },
      {
        title: "MS Dhoni",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "PK",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Race",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.1,
      },
      {
        title: "Dhoom",
        relaseDate: new Date(
          "Thu Mar 10 2006 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
    ],
    salary: 20000,
    favouriteColor: "Purple",
  },
  {
    username: "Sunil",
    age: 35,
    likes: ["kabaddi", "footbal", "programming", "ludo", "nightout"],
    movies: [
      {
        title: "Refuzi",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "LOC Kargil",
        relaseDate: new Date(
          "Thu May 12 2009 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 7,
      },
      {
        title: "Ullu",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Twilight Shaga",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.1,
      },
      {
        title: "Skyfall",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 8,
      },
    ],
    salary: 13000,
    favouriteColor: "Black",
  },
  {
    username: "James Bond",
    age: 52,
    likes: ["cricket", "chess", "programming", "shuting", "hunting"],
    movies: [
      {
        title: "Game Of Throne",
        relaseDate: new Date(
          "Thu Mar 10 2007 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 2,
      },
      {
        title: "Spider Man",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Thr Hulk",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Thor",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.1,
      },
      {
        title: "Lord of the Ring",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
    ],
    salary: 26000,
    favouriteColor: "Silver",
  },
  {
    username: "Json Server",
    age: 22,
    likes: ["cricket", "footbal", "programming", "kabaddi", "cancer jokes"],
    movies: [
      {
        title: "Memories",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Heropanti",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 4,
      },
      {
        title: "Hacker",
        relaseDate: new Date(
          "Thu Mar 10 2022 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Shaktiman",
        relaseDate: new Date(
          "Thu June 23 2018 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 8.1,
      },
      {
        title: "Junior Ji",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
    ],
    salary: 32000,
    favouriteColor: "Black",
  },
  {
    username: "Json Parser",
    age: 34,
    likes: ["kabaddi", "footbal", "programming", "chess", "cancer jokes"],
    movies: [
      {
        title: "Hero",
        relaseDate: new Date(
          "Thu Mar 9 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "The Hero",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 4,
      },
      {
        title: "Hera Pheri",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Incription",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 7.1,
      },
      {
        title: "Padmawat",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
    ],
    salary: 26000,
    favouriteColor: "Black",
  },
  {
    username: "Bakchonar kahi ka",
    age: 36,
    likes: ["ludo", "footbal", "Chicket", "chess", "reading"],
    movies: [
      {
        title: "The Kasmir FIles",
        relaseDate: new Date(
          "Fri Mar 5 2022 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 10,
      },
      {
        title: "Padman",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.8,
      },
      {
        title: "Uri",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 7.9,
      },
      {
        title: "Wrong Turn",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.1,
      },
      {
        title: "Wrong Turn 2",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
    ],
    salary: 35000,
    favouriteColor: "Red",
  },
  {
    username: "Kallu Kaliya",
    age: 29,
    likes: ["cricket", "footbal", "programming", "gym", "cancer jokes"],
    movies: [
      {
        title: "SonChidiya",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 2,
      },
      {
        title: "Mirza",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9,
      },
      {
        title: "Rabta",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Sharabi",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.1,
      },
      {
        title: "Baap 10 Numbery",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 3,
      },
    ],
    salary: 11000,
    favouriteColor: "Black",
  },
  {
    username: "Latkhor Insan",
    age: 32,
    likes: ["cricket", "footbal", "programming", "chess", "batminton"],
    movies: [
      {
        title: "Latkhor",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.8,
      },
      {
        title: "Gang of Washepur",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 8.7,
      },
      {
        title: "Wazir",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 4.5,
      },
      {
        title: "Pirates of Carbian",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.1,
      },
      {
        title: "The Mummy",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
    ],
    salary: 26000,
    favouriteColor: "Blue",
  },
  {
    username: "Banar Kahi ka",
    age: 25,
    likes: ["cricket", "footbal", "programming", "chess", "batmiton"],
    movies: [
      {
        title: "Bhatakati Aatma",
        relaseDate: new Date(
          "Thu Mar 10 2017 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6,
      },
      {
        title: "Purani Haweli",
        relaseDate: new Date(
          "Thu May 12 2010 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 7,
      },
      {
        title: "Barry Kangana",
        relaseDate: new Date(
          "Thu Mar 10 2016 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 5,
      },
      {
        title: "Kanchana",
        relaseDate: new Date(
          "Thu June 26 2015 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 9.1,
      },
      {
        title: "Lukmi Bomb",
        relaseDate: new Date(
          "Thu Mar 10 2003 12:55:49 GMT+0530 (India Standard Time"
        ),
        ratings: 6.7,
      },
    ],
    salary: 17000,
    favouriteColor: "Dark",
  },
];

export default users;
