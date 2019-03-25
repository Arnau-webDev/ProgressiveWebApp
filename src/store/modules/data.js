
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
    teams: ["U1", "U2", "U3", "U4", "U5", "U6"]
}

const getters = {
    allData: (state) => state.data,
    arrayOfTeams: (state) => state.teams
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