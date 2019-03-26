
const state = {
    data: {
        september: [
            {
                date: "9/01",
                team1: "U1",
                team2: "U4",
                location: "AJ Katzenmaier",
                timeline: "9:30 a.m"
            },
            {
                date: "9/01",
                team1: "U3",
                team2: "U2",
                location: "GreenBay",
                timeline: "1:00 p.m"
            },
            {
                date: "9/08",
                team1: "U5",
                team2: "U6",
                location: "Howard A Yeager",
                timeline: "9:30 a.m"
            },
            {
                date: "9/08",
                team1: "U6",
                team2: "U1",
                location: "Marjorie P Hart",
                timeline: "1:00 p.m"
            },
            {
                date: "9/15",
                team1: "U2",
                team2: "U4",
                location: "North",
                timeline: "9:30 a.m"
            },
            {
                date: "9/15",
                team1: "U3",
                team2: "U5",
                location: "AJ Katzenmaier",
                timeline: "1:00 p.m"
            },
            {
                date: "9/22",
                team1: "U1",
                team2: "U3",
                location: "South",
                timeline: "9:30 a.m"
            },
            {
                date: "9/22",
                team1: "U2",
                team2: "U6",
                location: "Howard A Yeager",
                timeline: "1:00 p.m"
            },
            {
                date: "9/29",
                team1: "U4",
                team2: "U5",
                location: "Greenbay",
                timeline: "9:30 a.m"
            }
        ],
        october: [
            {
                date: "10/06",
                team1: "U2",
                team2: "U5",
                location: "Marjorie P Hart",
                timeline: "9:30 a.m."
            },
            {
                date: "10/06",
                team1: "U1",
                team2: "U6",
                location: "South",
                timeline: "1:00 p.m."
            },
            {
                date: "10/13",
                team1: "U3",
                team2: "U4",
                location: "Howard A Yeager",
                timeline: "9:30 a.m."
            },
            {
                date: "10/13",
                team1: "U5",
                team2: "U1",
                location: "Greenbay",
                timeline: "1:00 a.m."
            },
            {
                date: "10/20",
                team1: "U6",
                team2: "U3",
                location: "North",
                timeline: "9:30 a.m."
            },
            {
                date: "10/20",
                team1: "U2",
                team2: "U4",
                location: "Marjorie P Hart",
                timeline: "1:00 a.m."
            },
            {
                date: "10/27",
                team1: "U3",
                team2: "U1",
                location: "AJ Katzenmaier",
                timeline: "9:30 a.m."
            },
            {
                date: "10/27",
                team1: "U5",
                team2: "U6",
                location: "Howard A Yeager",
                timeline: "1:00 a.m."
            }
        ]
    },
    teams: ["U1", "U2", "U3", "U4", "U5", "U6"],
    locations: [
        {
            name: "AJ Katzenmaier",
            location: "https://www.google.es/maps/place/A+J+Katzenmaier+Elementary+School/@42.3258685,-87.8649288,17z/data=!3m1!4b1!4m5!3m4!1s0x880f932fbc6ba7cd:0xcf2bbe275c6da815!8m2!3d42.3258685!4d-87.8627401"
        },
        {
            name: "GreenBay",
            location: "https://www.google.es/maps/place/Greenbay+Elementary+School+(K-5)/@42.3209639,-87.8710529,17z/data=!3m1!4b1!4m5!3m4!1s0x880f933bce5af881:0x740a7a7d548adce1!8m2!3d42.3209639!4d-87.86886421"
        },
        {
            name: "Howard A Yeager",
            location: "https://www.google.es/maps/place/Howard+A.+Yeager+School+(PREK-K)/@42.3219766,-87.8539059,13.91z/data=!4m5!3m4!1s0x880feccac26b07c5:0x8b51fa5d6efe771a!8m2!3d42.3154383!4d-87.8538811"
        },
        {
            name: "Majorie P Hart",
            location: "https://www.google.es/maps/place/Marjorie+P+Hart+Elementary+School/@42.3271639,-87.8478787,17z/data=!3m1!4b1!4m5!3m4!1s0x880fecd0628e1bb5:0x9a4d5f9aafd42e02!8m2!3d42.3271639!4d-87.84569"
        },
        {
            name: "North",
            location: "https://www.google.es/maps/place/North+Elementary+School/@42.368957,-87.8431997,15z/data=!4m8!1m2!2m1!1sNorth+Elementary+School!3m4!1s0x880fed60b13aa0a7:0xfe6df83b0f197ed6!8m2!3d42.368957!4d-87.834445"
        },
        {
            name: "South",
            location: "https://www.google.es/maps/place/South+Elementary+School/@42.317067,-87.8896119,13z/data=!4m8!1m2!2m1!1sSouth+Elementary+School!3m4!1s0x880feccac2135a21:0x8ce88e90b96bbec1!8m2!3d42.317067!4d-87.854593"
        }
    ]
}

const getters = {
    allData: (state) => state.data,
    arrayOfTeams: (state) => state.teams,
    locationsData: (state) => state.locations,
};

const actions = {
};

const mutations = {
};

export default {
    state,
    getters,
    actions,
    mutations
};