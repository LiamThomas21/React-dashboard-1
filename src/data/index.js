import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 42056,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
  },
];

export const ordersData = [
  {
    name: "Skateboard",
    type: "Illustration",
    items: 58,
    change: 290,
  },
  {
    name: "Language courses",
    type: "Illustration",
    items: 12,
    change: 72
  },
  {
    name: "Office Collaboration",
    type: "Illustration",
    items: 7,
    change: 70
  },
  {
    name: "Robot",
    type: "Illustration",
    items: 21,
    change: 15
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Party',
    start: todayStr + 'T14:00:00',

  },
  {
    id: createEventId(),
    title: 'Hackathon event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Flight to JHB",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Company Birthday",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Hire Mr. Thomas",
          description: "Hire Liam because he is amazing!",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Front-end Development",
          description: "Pursuing Front-end Developer Course from Meta"
        },
        {
          id: 11,
          title: "UI/UX Design",
          description: "Following UI/UX best practices to create amazing designs"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Update  Server Setup",
          description: "Configure required modules and starters"
        },
        {
          id: 13,
          title: "Modular structure",
          description: "Write css in form of modules to reduce the naming conflicts"
        }
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'Elon',
      lastName: 'Musk',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'California',
  },
  {
    name: {
      firstName: 'Liam',
      lastName: 'Thomas',
    },
    address: '123 Rose Street',
    city: 'Cape Town',
    state: 'Western Cape',
  },
  {
    name: {
      firstName: 'Steve',
      lastName: 'Jobs',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'Texas',
  },
  {
    name: {
      firstName: 'Mark',
      lastName: 'Zuckerberg',
    },
    address: '722 Emie Stream',
    city: 'Johannesburg',
    state: 'Gauteng',
  },
  {
    name: {
      firstName: 'Tim',
      lastName: 'Cook',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Bloemfontein',
    state: 'Free State',
  },
  {
    name: {
      firstName: 'Satya',
      lastName: 'Nadella',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'Washington',
  },
  {
    name: {
      firstName: 'Sheryl',
      lastName: 'Sandberg',
    },
    address: '722 Emie Stream',
    city: 'Pretoria',
    state: 'Gauteng',
  },
  {
    name: {
      firstName: 'Jony',
      lastName: 'Ive',
    },
    address: '32188 Larkin Turnpike',
    city: 'Columbia',
    state: 'Maryland',
  },
];