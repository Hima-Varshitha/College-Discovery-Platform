type RankCutoff = {
  year: number;
  exam: string;
  branch: string;
  category?: string;
  gender?: string;
  quota?: string;
  round?: number;
  openingRank: number;
  closingRank: number;
};

type ScoreCutoff = {
  year: number;
  exam: string;
  branch: string;
  campus: string;
  cutoffScore: number;
  maximumScore: number;
};

export type College = {
  id: number;
  name: string;
  shortDescription: string;
  keywords: string[];
  location: string;
  state: string;
  type: string;
  establishedYear: number;
  rating: number;
  fees: string;
  entranceExam: string;
  cutoff: RankCutoff | ScoreCutoff;
  courses: string[];
  placement: {
    averagePackage: string;
    highestPackage: string;
  };
  description: string;
  reviews: {
    comment: string;
    name: string;
    branch: string;
    year: string;
  }[];
};

export const colleges: College[] = [
  {
    id: 1,
    name: "Indian Institute of Technology Bombay",
    shortDescription: "India's premier engineering institute recognized for world-class research, entrepreneurship, and academic excellence.",
    keywords: [
      "IIT",
      "IITB",
      "IIT Bombay",
      "Bombay",
    ],
    location: "Mumbai",
    state: "Maharashtra",
    type: "Government",
    establishedYear: 1958,
    rating: 4.8,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 5,
      openingRank: 1,
      closingRank: 67,
    },

    courses: [
      "Computer Science Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹23-25 LPA",
      highestPackage: "₹1 Crore+",
    },

    description:
      "IIT Bombay is one of India's premier engineering institutes known for academic excellence, research, innovation, and strong industry connections.",

    reviews: [
      {
        comment: "Excellent academic environment with strong research culture.",
        name: "Rahul Sharma",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Amazing placement opportunities and industry exposure.",
        name: "Ananya Patel",
        branch: "Electrical Engineering",
        year: "3rd Year",
      },
      {
        comment: "Great research facilities and innovation ecosystem.",
        name: "Vikram Reddy",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 2,
    name: "Indian Institute of Technology Delhi",
    shortDescription: "One of India's top technical institutes known for innovation, research, and outstanding career opportunities.",
    keywords: [
      "IIT",
      "IITD",
      "IIT Delhi",
      "Delhi IIT",
    ],
    location: "New Delhi",
    state: "Delhi",
    type: "Government",
    establishedYear: 1961,
    rating: 4.8,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 5,
      openingRank: 35,
      closingRank: 128,
    },

    courses: [
      "Computer Science Engineering",
      "Electronics Engineering",
      "Civil Engineering",
    ],

    placement: {
      averagePackage: "₹20-25 LPA",
      highestPackage: "₹1 Crore+",
    },

    description:
      "IIT Delhi is a leading engineering institute offering world-class education, research opportunities, and excellent career prospects.",

    reviews: [
      {
        comment: "Excellent faculty with practical learning opportunities.",
        name: "Priya Verma",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Strong alumni network and career guidance.",
        name: "Arjun Mehta",
        branch: "Electrical Engineering",
        year: "3rd Year",
      },
      {
        comment: "Great campus opportunities and student activities.",
        name: "Sneha Kumar",
        branch: "Civil Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 3,
    name: "Indian Institute of Technology Madras",
    shortDescription: "India's top-ranked engineering institute known for cutting-edge research, innovation, and excellence in technology education.",
    keywords: [
      "IIT",
      "IITM",
      "IIT Madras",
      "Madras IIT",
    ],
    location: "Chennai",
    state: "Tamil Nadu",
    type: "Government",
    establishedYear: 1959,
    rating: 4.9,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 6,
      openingRank: 79,
      closingRank: 171,
    },

    courses: [
      "Computer Science Engineering",
      "Artificial Intelligence",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹22-25 LPA",
      highestPackage: "₹1 Crore+",
    },

    description:
      "IIT Madras is among India's top engineering institutes with strong research programs and industry partnerships.",

    reviews: [
      {
        comment: "Excellent research culture with advanced facilities.",
        name: "Karthik Rao",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Strong placements and excellent academic environment.",
        name: "Divya Sharma",
        branch: "Artificial Intelligence",
        year: "3rd Year",
      },
      {
        comment: "Highly supportive faculty and research opportunities.",
        name: "Rohan Patel",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 4,
    name: "Indian Institute of Technology Kanpur",
    shortDescription:
      "A premier engineering institute known for strong academics, research excellence, and innovation.",
    keywords: [
      "IIT",
      "IITK",
      "IIT Kanpur",
      "Kanpur IIT",
    ],
    location: "Kanpur",
    state: "Uttar Pradesh",
    type: "Government",
    establishedYear: 1959,
    rating: 4.7,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 6,
      openingRank: 238,
      closingRank: 238,
    },

    courses: [
      "Computer Science Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹20-24 LPA",
      highestPackage: "₹1 Crore+",
    },

    description:
      "IIT Kanpur is one of India's leading engineering institutes with excellent research facilities, strong academic programs, and a global reputation.",

    reviews: [
      {
        comment: "Excellent academic environment and research opportunities.",
        name: "Rahul Singh",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Strong technical culture and experienced faculty.",
        name: "Meera Sharma",
        branch: "Electrical Engineering",
        year: "3rd Year",
      },
      {
        comment: "Great campus and innovation ecosystem.",
        name: "Aditya Kumar",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 5,
    name: "Indian Institute of Technology Kharagpur",
    shortDescription:
      "India's first IIT with a historic legacy and strong engineering programs.",
    keywords: [
      "IIT",
      "IITKGP",
      "IIT Kharagpur",
    ],
    location: "Kharagpur",
    state: "West Bengal",
    type: "Government",
    establishedYear: 1951,
    rating: 4.7,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 6,
      openingRank: 415,
      closingRank: 450,
    },

    courses: [
      "Computer Science Engineering",
      "Electronics Engineering",
      "Aerospace Engineering",
    ],

    placement: {
      averagePackage: "₹18-22 LPA",
      highestPackage: "₹1 Crore+",
    },

    description:
      "IIT Kharagpur is the oldest IIT known for its diverse engineering programs, research contributions, and large campus.",

    reviews: [
      {
        comment: "Huge campus with excellent learning opportunities.",
        name: "Rohan Das",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Strong alumni network and industry exposure.",
        name: "Priya Nair",
        branch: "Electronics Engineering",
        year: "3rd Year",
      },
      {
        comment: "Great technical clubs and student community.",
        name: "Vivek Rao",
        branch: "Aerospace Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 6,
    name: "Indian Institute of Technology Roorkee",
    shortDescription:
      "A historic engineering institute known for excellence in technology and research.",
    keywords: [
      "IIT",
      "IITR",
      "IIT Roorkee",
    ],
    location: "Roorkee",
    state: "Uttarakhand",
    type: "Government",
    establishedYear: 1847,
    rating: 4.7,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 6,
      openingRank: 481,
      closingRank: 600,
    },

    courses: [
      "Computer Science Engineering",
      "Civil Engineering",
      "Electrical Engineering",
    ],

    placement: {
      averagePackage: "₹18-22 LPA",
      highestPackage: "₹1 Crore+",
    },

    description:
      "IIT Roorkee is one of India's oldest technical institutions with strong engineering education and research programs.",

    reviews: [
      {
        comment: "Excellent academics with strong technical foundation.",
        name: "Karan Mehta",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Good placements and research opportunities.",
        name: "Anjali Verma",
        branch: "Electrical Engineering",
        year: "3rd Year",
      },
      {
        comment: "Historic campus with great student culture.",
        name: "Nikhil Rao",
        branch: "Civil Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 7,
    name: "Indian Institute of Technology Hyderabad",
    shortDescription:
      "A fast-growing IIT known for advanced research, innovation, and modern engineering programs.",
    keywords: [
      "IIT",
      "IITH",
      "IIT Hyderabad",
    ],
    location: "Hyderabad",
    state: "Telangana",
    type: "Government",
    establishedYear: 2008,
    rating: 4.6,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 6,
      openingRank: 600,
      closingRank: 900,
    },

    courses: [
      "Computer Science Engineering",
      "Artificial Intelligence",
      "Electrical Engineering",
    ],

    placement: {
      averagePackage: "₹18-22 LPA",
      highestPackage: "₹90 LPA+",
    },

    description:
      "IIT Hyderabad is one of India's leading new-generation IITs with strong research programs, modern infrastructure, and industry collaboration.",

    reviews: [
      {
        comment: "Excellent research opportunities and modern campus.",
        name: "Rahul Varma",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Great coding culture and technical environment.",
        name: "Sneha Reddy",
        branch: "Artificial Intelligence",
        year: "3rd Year",
      },
      {
        comment: "Strong academics with supportive faculty.",
        name: "Arjun Kumar",
        branch: "Electrical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 8,
    name: "Indian Institute of Technology Guwahati",
    shortDescription:
      "A premier IIT known for research excellence, beautiful campus, and strong engineering programs.",
    keywords: [
      "IIT",
      "IITG",
      "IIT Guwahati",
    ],
    location: "Guwahati",
    state: "Assam",
    type: "Government",
    establishedYear: 1994,
    rating: 4.6,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 6,
      openingRank: 700,
      closingRank: 1100,
    },

    courses: [
      "Computer Science Engineering",
      "Electronics Engineering",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹18-20 LPA",
      highestPackage: "₹1 Crore+",
    },

    description:
      "IIT Guwahati is a leading IIT offering excellent engineering education, research facilities, and a vibrant student community.",

    reviews: [
      {
        comment: "Beautiful campus with excellent learning environment.",
        name: "Amit Sharma",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Good placements and strong technical clubs.",
        name: "Neha Das",
        branch: "Electronics Engineering",
        year: "3rd Year",
      },
      {
        comment: "Great balance between academics and campus life.",
        name: "Vivek Singh",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 9,
    name: "Indian Institute of Technology (BHU) Varanasi",
    shortDescription:
      "A historic IIT with strong engineering traditions, research, and industry connections.",
    keywords: [
      "IIT",
      "IIT BHU",
      "IIT Varanasi",
    ],
    location: "Varanasi",
    state: "Uttar Pradesh",
    type: "Government",
    establishedYear: 1919,
    rating: 4.6,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 6,
      openingRank: 1500,
      closingRank: 2200,
    },

    courses: [
      "Computer Science Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹15-18 LPA",
      highestPackage: "₹1 Crore+",
    },

    description:
      "IIT BHU combines a rich academic heritage with modern engineering education and strong placement opportunities.",

    reviews: [
      {
        comment: "Strong alumni network and academic culture.",
        name: "Kunal Mishra",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Excellent technical exposure and opportunities.",
        name: "Riya Sharma",
        branch: "Electrical Engineering",
        year: "3rd Year",
      },
      {
        comment: "Great campus with historic importance.",
        name: "Manish Rao",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 10,
    name: "Indian Institute of Technology Indore",
    shortDescription:
      "A leading new-generation IIT known for research excellence, innovation, and interdisciplinary education.",
    keywords: [
      "IIT",
      "IITI",
      "IIT Indore",
      "Indore IIT",
    ],
    location: "Indore",
    state: "Madhya Pradesh",
    type: "Government",
    establishedYear: 2009,
    rating: 4.5,

    fees: "Approximately ₹10-12 Lakhs (4 years)",

    entranceExam: "JEE Advanced",

    cutoff: {
      year: 2026,
      exam: "JEE Advanced",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "All India",
      round: 6,
      openingRank: 1200,
      closingRank: 1600,
    },

    courses: [
      "Computer Science Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹15-18 LPA",
      highestPackage: "₹80 LPA+",
    },

    description:
      "IIT Indore is one of India's fastest-growing IITs with strong research programs, modern infrastructure, and excellent academic opportunities.",

    reviews: [
      {
        comment: "Excellent research environment and modern facilities.",
        name: "Siddharth Verma",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Good placement opportunities and supportive faculty.",
        name: "Pooja Sharma",
        branch: "Electrical Engineering",
        year: "3rd Year",
      },
      {
        comment: "Great campus culture with innovation opportunities.",
        name: "Harsh Patel",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 11,
    name: "National Institute of Technology Warangal",
    shortDescription: "One of India's oldest NITs with strong engineering programs and excellent placement opportunities.",
    keywords: [
      "NIT",
      "NITW",
      "NIT Warangal",
      "Warangal NIT",
    ],
    location: "Warangal",
    state: "Telangana",
    type: "Government",
    establishedYear: 1959,
    rating: 4.6,

    fees: "Approximately ₹5-6 Lakhs (4 years)",

    entranceExam: "JEE Main",

    cutoff: {
      year: 2026,
      exam: "JEE Main",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "Other State",
      round: 5,
      openingRank: 1998,
      closingRank: 2581,
    },

    courses: [
      "Computer Science Engineering",
      "Electronics and Communication Engineering",
      "Electrical Engineering",
    ],

    placement: {
      averagePackage: "₹14-16 LPA",
      highestPackage: "₹50 LPA+",
    },

    description:
      "NIT Warangal is one of India's oldest and most reputed NITs with strong engineering programs and placements.",

    reviews: [
      {
        comment: "Excellent technical education and coding culture.",
        name: "Sai Krishna",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Good placement record with strong industry connections.",
        name: "Meghana Reddy",
        branch: "Electronics Engineering",
        year: "3rd Year",
      },
      {
        comment: "Very active student community and campus life.",
        name: "Aditya Rao",
        branch: "Electrical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 12,
    name: "National Institute of Technology Tiruchirappalli",
    shortDescription:
      "One of India's top NITs known for academic excellence, strong placements, and industry connections.",
    keywords: [
      "NIT",
      "NITT",
      "NIT Trichy",
      "Trichy NIT",
    ],
    location: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "Government",
    establishedYear: 1964,
    rating: 4.7,

    fees: "Approximately ₹5-6 Lakhs (4 years)",

    entranceExam: "JEE Main",

    cutoff: {
      year: 2026,
      exam: "JEE Main",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "Other State",
      round: 6,
      openingRank: 800,
      closingRank: 4500,
    },

    courses: [
      "Computer Science Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹14-16 LPA",
      highestPackage: "₹50 LPA+",
    },

    description:
      "NIT Trichy is one of India's premier NITs with excellent academics, research facilities, and placement opportunities.",

    reviews: [
      {
        comment: "Excellent placements and competitive environment.",
        name: "Arun Kumar",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Great faculty and strong technical culture.",
        name: "Divya Rao",
        branch: "ECE",
        year: "3rd Year",
      },
      {
        comment: "One of the best NIT campuses in India.",
        name: "Karthik S",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
    id: 13,
    name: "National Institute of Technology Karnataka Surathkal",
    shortDescription:
      "A leading NIT famous for excellent engineering education, research, and coastal campus.",
    keywords: [
      "NIT",
      "NITK",
      "NIT Surathkal",
    ],
    location: "Surathkal",
    state: "Karnataka",
    type: "Government",
    establishedYear: 1960,
    rating: 4.7,

    fees: "Approximately ₹5-6 Lakhs (4 years)",

    entranceExam: "JEE Main",

    cutoff: {
      year: 2026,
      exam: "JEE Main",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "Other State",
      round: 6,
      openingRank: 1000,
      closingRank: 6000,
    },

    courses: [
      "Computer Science Engineering",
      "Information Technology",
      "Electronics Engineering",
    ],

    placement: {
      averagePackage: "₹13-16 LPA",
      highestPackage: "₹50 LPA+",
    },

    description:
      "NIT Surathkal is among India's top engineering institutes with strong academics and industry reputation.",

    reviews: [
      {
        comment: "Beautiful campus with excellent opportunities.",
        name: "Rahul Nair",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Great coding culture and placements.",
        name: "Ananya Rao",
        branch: "Information Technology",
        year: "3rd Year",
      },
      {
        comment: "Strong alumni network and academics.",
        name: "Vishal Kumar",
        branch: "ECE",
        year: "4th Year",
      },
    ],
  },

  {
    id: 14,
    name: "National Institute of Technology Rourkela",
    shortDescription:
      "A top NIT known for strong engineering programs, research, and excellent campus facilities.",
    keywords: [
      "NIT",
      "NITR",
      "NIT Rourkela",
    ],
    location: "Rourkela",
    state: "Odisha",
    type: "Government",
    establishedYear: 1961,
    rating: 4.6,

    fees: "Approximately ₹5-6 Lakhs (4 years)",

    entranceExam: "JEE Main",

    cutoff: {
      year: 2026,
      exam: "JEE Main",
      branch: "Computer Science and Engineering",
      category: "OPEN",
      gender: "Gender-Neutral",
      quota: "Other State",
      round: 6,
      openingRank: 2000,
      closingRank: 8500,
    },

    courses: [
      "Computer Science Engineering",
      "Electronics Engineering",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹12-15 LPA",
      highestPackage: "₹50 LPA+",
    },

    description:
      "NIT Rourkela is a reputed technical institute offering quality education, research opportunities, and strong industry connections.",

    reviews: [
      {
        comment: "Good academics with excellent infrastructure.",
        name: "Aakash Patel",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Strong technical clubs and campus activities.",
        name: "Sneha Das",
        branch: "ECE",
        year: "3rd Year",
      },
      {
        comment: "Good placement opportunities.",
        name: "Rohit Kumar",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
  id: 15,
  name: "National Institute of Technology Calicut",
  shortDescription:
    "A leading NIT recognized for quality engineering education and research.",
  keywords: [
    "NIT",
    "NITC",
    "NIT Calicut",
  ],
  location: "Calicut",
  state: "Kerala",
  type: "Government",
  establishedYear: 1961,
  rating: 4.6,

  fees: "Approximately ₹5-6 Lakhs (4 years)",

  entranceExam: "JEE Main",

  cutoff: {
    year: 2026,
    exam: "JEE Main",
    branch: "Computer Science and Engineering",
    category: "OPEN",
    gender: "Gender-Neutral",
    quota: "Other State",
    round: 6,
    openingRank: 3000,
    closingRank: 10000,
  },

  courses: [
    "Computer Science Engineering",
    "Electronics and Communication Engineering",
    "Electrical Engineering",
  ],

  placement: {
    averagePackage: "₹12-14 LPA",
    highestPackage: "₹45 LPA+",
  },

  description:
    "NIT Calicut is one of India's oldest NITs with strong academics and research programs.",

  reviews: [
    {
      comment: "Great learning environment and faculty support.",
      name: "Nikhil Menon",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Good placement record and student culture.",
      name: "Anjali Nair",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Excellent campus experience.",
      name: "Vivek Shah",
      branch: "Electrical Engineering",
      year: "4th Year",
    },
  ],
},

{
  id: 16,
  name: "Visvesvaraya National Institute of Technology Nagpur",
  shortDescription:
    "A premier NIT known for engineering excellence and strong industry relations.",
  keywords: [
    "VNIT",
    "NIT",
    "VNIT Nagpur",
  ],
  location: "Nagpur",
  state: "Maharashtra",
  type: "Government",
  establishedYear: 1960,
  rating: 4.5,

  fees: "Approximately ₹5-6 Lakhs (4 years)",

  entranceExam: "JEE Main",

  cutoff: {
    year: 2026,
    exam: "JEE Main",
    branch: "Computer Science and Engineering",
    category: "OPEN",
    gender: "Gender-Neutral",
    quota: "Other State",
    round: 6,
    openingRank: 4000,
    closingRank: 12000,
  },

  courses: [
    "Computer Science Engineering",
    "Electronics Engineering",
    "Civil Engineering",
  ],

  placement: {
    averagePackage: "₹10-13 LPA",
    highestPackage: "₹40 LPA+",
  },

  description:
    "VNIT Nagpur provides quality technical education with strong engineering programs and research facilities.",

  reviews: [
    {
      comment: "Good academics and industry exposure.",
      name: "Ravi Joshi",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Supportive faculty and good campus life.",
      name: "Priya Kulkarni",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Strong technical foundation.",
      name: "Aman Verma",
      branch: "Civil Engineering",
      year: "4th Year",
    },
  ],
},

{
  id: 17,
  name: "Malaviya National Institute of Technology Jaipur",
  shortDescription:
    "A reputed NIT known for quality engineering education, research, and strong placements.",
  keywords: [
    "NIT",
    "MNIT",
    "MNIT Jaipur",
  ],
  location: "Jaipur",
  state: "Rajasthan",
  type: "Government",
  establishedYear: 1963,
  rating: 4.5,

  fees: "Approximately ₹5-6 Lakhs (4 years)",

  entranceExam: "JEE Main",

  cutoff: {
    year: 2026,
    exam: "JEE Main",
    branch: "Computer Science and Engineering",
    category: "OPEN",
    gender: "Gender-Neutral",
    quota: "Other State",
    round: 6,
    openingRank: 4500,
    closingRank: 14000,
  },

  courses: [
    "Computer Science Engineering",
    "Electronics and Communication Engineering",
    "Mechanical Engineering",
  ],

  placement: {
    averagePackage: "₹10-13 LPA",
    highestPackage: "₹40 LPA+",
  },

  description:
    "MNIT Jaipur is one of India's leading NITs with strong academics, research facilities, and industry collaborations.",

  reviews: [
    {
      comment: "Good academics and excellent campus environment.",
      name: "Amit Sharma",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Strong placement support and faculty guidance.",
      name: "Neha Gupta",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Great technical clubs and student activities.",
      name: "Rohan Mehta",
      branch: "Mechanical Engineering",
      year: "4th Year",
    },
  ],
},

{
  id: 18,
  name: "National Institute of Technology Durgapur",
  shortDescription:
    "A reputed NIT offering strong engineering programs with good academic facilities.",
  keywords: [
    "NIT",
    "NIT Durgapur",
    "NITD",
  ],
  location: "Durgapur",
  state: "West Bengal",
  type: "Government",
  establishedYear: 1960,
  rating: 4.4,

  fees: "Approximately ₹5-6 Lakhs (4 years)",

  entranceExam: "JEE Main",

  cutoff: {
    year: 2026,
    exam: "JEE Main",
    branch: "Computer Science and Engineering",
    category: "OPEN",
    gender: "Gender-Neutral",
    quota: "Other State",
    round: 6,
    openingRank: 7000,
    closingRank: 18000,
  },

  courses: [
    "Computer Science Engineering",
    "Electronics Engineering",
    "Electrical Engineering",
  ],

  placement: {
    averagePackage: "₹9-12 LPA",
    highestPackage: "₹40 LPA+",
  },

  description:
    "NIT Durgapur provides quality technical education with a strong focus on engineering and research.",

  reviews: [
    {
      comment: "Good academic environment and placements.",
      name: "Sourav Das",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Supportive faculty and active student clubs.",
      name: "Priya Sen",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Balanced campus life and academics.",
      name: "Rahul Roy",
      branch: "Electrical Engineering",
      year: "4th Year",
    },
  ],
},

{
  id: 19,
  name: "National Institute of Technology Kurukshetra",
  shortDescription:
    "A well-established NIT known for engineering education and industry-oriented programs.",
  keywords: [
    "NIT",
    "NITKKR",
    "NIT Kurukshetra",
  ],
  location: "Kurukshetra",
  state: "Haryana",
  type: "Government",
  establishedYear: 1963,
  rating: 4.4,

  fees: "Approximately ₹5-6 Lakhs (4 years)",

  entranceExam: "JEE Main",

  cutoff: {
    year: 2026,
    exam: "JEE Main",
    branch: "Computer Science and Engineering",
    category: "OPEN",
    gender: "Gender-Neutral",
    quota: "Other State",
    round: 6,
    openingRank: 6000,
    closingRank: 16000,
  },

  courses: [
    "Computer Science Engineering",
    "Information Technology",
    "Electronics Engineering",
  ],

  placement: {
    averagePackage: "₹9-12 LPA",
    highestPackage: "₹45 LPA+",
  },

  description:
    "NIT Kurukshetra is a respected engineering institute with strong placement opportunities and technical programs.",

  reviews: [
    {
      comment: "Good placement opportunities and academics.",
      name: "Vikas Sharma",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Strong technical culture and infrastructure.",
      name: "Simran Kaur",
      branch: "IT",
      year: "3rd Year",
    },
    {
      comment: "Good learning environment.",
      name: "Arjun Singh",
      branch: "ECE",
      year: "4th Year",
    },
  ],
},

{
  id: 20,
  name: "National Institute of Technology Delhi",
  shortDescription:
    "A growing NIT located in Delhi with modern engineering programs and industry exposure.",
  keywords: [
    "NIT",
    "NIT Delhi",
    "NITD",
  ],
  location: "New Delhi",
  state: "Delhi",
  type: "Government",
  establishedYear: 2010,
  rating: 4.3,

  fees: "Approximately ₹5-6 Lakhs (4 years)",

  entranceExam: "JEE Main",

  cutoff: {
    year: 2026,
    exam: "JEE Main",
    branch: "Computer Science and Engineering",
    category: "OPEN",
    gender: "Gender-Neutral",
    quota: "Other State",
    round: 6,
    openingRank: 9000,
    closingRank: 20000,
  },

  courses: [
    "Computer Science Engineering",
    "Electronics Engineering",
    "Mechanical Engineering",
  ],

  placement: {
    averagePackage: "₹10-12 LPA",
    highestPackage: "₹40 LPA+",
  },

  description:
    "NIT Delhi is a newer NIT offering modern engineering education with access to opportunities in the national capital region.",

  reviews: [
    {
      comment: "Good location advantage and industry exposure.",
      name: "Karan Gupta",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Modern curriculum and supportive faculty.",
      name: "Isha Verma",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Growing institute with good opportunities.",
      name: "Manav Jain",
      branch: "Mechanical Engineering",
      year: "4th Year",
    },
  ],
},

  {
    id: 21,
    name: "Birla Institute of Technology and Science Pilani",
    shortDescription: "A leading private engineering institute known for entrepreneurship, flexible academics, and industry exposure.",
    keywords: [
      "BITS",
      "BITSP",
      "BITS Pilani",
      "Pilani",
    ],
    location: "Pilani",
    state: "Rajasthan",
    type: "Private",
    establishedYear: 1964,
    rating: 4.6,

    fees: "Approximately ₹20-25 Lakhs (4 years)",

    entranceExam: "BITSAT",

    cutoff: {
      year: 2025,
      exam: "BITSAT",
      branch: "B.E. Computer Science",
      campus: "Pilani",
      cutoffScore: 304,
      maximumScore: 390,
    },

    courses: [
      "Computer Science Engineering",
      "Electronics Engineering",
      "Mechanical Engineering",
    ],

    placement: {
      averagePackage: "₹18-20 LPA",
      highestPackage: "₹60 LPA+",
    },

    description:
      "BITS Pilani is one of India's leading private engineering institutes known for innovation, entrepreneurship, and industry exposure.",

    reviews: [
      {
        comment: "Excellent campus culture and entrepreneurial environment.",
        name: "Rahul Singh",
        branch: "Computer Science",
        year: "4th Year",
      },
      {
        comment: "Strong industry connections and internship opportunities.",
        name: "Neha Gupta",
        branch: "Electronics Engineering",
        year: "3rd Year",
      },
      {
        comment: "Flexible academic system with great learning freedom.",
        name: "Varun Kumar",
        branch: "Mechanical Engineering",
        year: "4th Year",
      },
    ],
  },

  {
  id: 22,
  name: "Birla Institute of Technology and Science Goa",
  shortDescription:
    "A leading private engineering campus offering strong academics and research opportunities.",
  keywords: [
    "BITS",
    "BITS Goa",
    "BITSG",
  ],
  location: "Goa",
  state: "Goa",
  type: "Private",
  establishedYear: 2004,
  rating: 4.5,

  fees: "Approximately ₹20-25 Lakhs (4 years)",

  entranceExam: "BITSAT",

  cutoff: {
    year: 2025,
    exam: "BITSAT",
    branch: "B.E. Computer Science",
    campus: "Goa",
    cutoffScore: 295,
    maximumScore: 390,
  },

  courses: [
    "Computer Science Engineering",
    "Electronics Engineering",
    "Mechanical Engineering",
  ],

  placement: {
    averagePackage: "₹16-20 LPA",
    highestPackage: "₹50 LPA+",
  },

  description:
    "BITS Goa provides a modern learning environment with strong engineering programs, research culture, and industry exposure.",

  reviews: [
    {
      comment: "Amazing campus and technical environment.",
      name: "Arjun Nair",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Good placements and student clubs.",
      name: "Priya Menon",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Great campus life and opportunities.",
      name: "Vivek Shah",
      branch: "Mechanical",
      year: "4th Year",
    },
  ],
},

{
  id: 23,
  name: "Birla Institute of Technology and Science Hyderabad",
  shortDescription:
    "A growing BITS campus known for quality engineering education and research.",
  keywords: [
    "BITS",
    "BITS Hyderabad",
    "BITSH",
  ],
  location: "Hyderabad",
  state: "Telangana",
  type: "Private",
  establishedYear: 2008,
  rating: 4.4,

  fees: "Approximately ₹20-25 Lakhs (4 years)",

  entranceExam: "BITSAT",

  cutoff: {
    year: 2025,
    exam: "BITSAT",
    branch: "B.E. Computer Science",
    campus: "Hyderabad",
    cutoffScore: 285,
    maximumScore: 390,
  },

  courses: [
    "Computer Science Engineering",
    "Electronics Engineering",
    "Chemical Engineering",
  ],

  placement: {
    averagePackage: "₹15-18 LPA",
    highestPackage: "₹50 LPA+",
  },

  description:
    "BITS Hyderabad offers modern infrastructure, strong academics, and opportunities in technology and research.",

  reviews: [
    {
      comment: "Good academics with modern facilities.",
      name: "Sai Kumar",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Strong technical exposure.",
      name: "Megha Rao",
      branch: "Electronics",
      year: "3rd Year",
    },
    {
      comment: "Supportive faculty and campus culture.",
      name: "Rohan Patel",
      branch: "Chemical Engineering",
      year: "4th Year",
    },
  ],
},

{
  id: 24,
  name: "Vellore Institute of Technology Vellore",
  shortDescription:
    "One of India's leading private universities known for engineering education, placements, and global exposure.",
  keywords: [
    "VIT",
    "VIT Vellore",
    "Vellore Institute of Technology",
  ],
  location: "Vellore",
  state: "Tamil Nadu",
  type: "Private",
  establishedYear: 1984,
  rating: 4.5,

  fees: "Approximately ₹8-10 Lakhs (4 years)",

  entranceExam: "VITEEE",

  cutoff: {
    year: 2025,
    exam: "VITEEE",
    branch: "Computer Science Engineering",
    category: "OPEN",
    gender: "All",
    quota: "All India",
    round: 1,
    openingRank: 1,
    closingRank: 8000,
  },

  courses: [
    "Computer Science Engineering",
    "Artificial Intelligence",
    "Electronics Engineering",
  ],

  placement: {
    averagePackage: "₹8-10 LPA",
    highestPackage: "₹50 LPA+",
  },

  description:
    "VIT Vellore is a top private engineering institute with strong industry partnerships, research facilities, and placement opportunities.",

  reviews: [
    {
      comment: "Excellent infrastructure and placement support.",
      name: "Rahul Kumar",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Good coding culture and campus facilities.",
      name: "Priya Sharma",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Great opportunities for skill development.",
      name: "Arjun Rao",
      branch: "AI Engineering",
      year: "4th Year",
    },
  ],
},

{
  id: 25,
  name: "Manipal Institute of Technology",
  shortDescription:
    "A reputed private engineering college known for innovation, campus life, and industry exposure.",
  keywords: [
    "MIT Manipal",
    "Manipal Institute of Technology",
    "MIT",
  ],
  location: "Manipal",
  state: "Karnataka",
  type: "Private",
  establishedYear: 1957,
  rating: 4.4,

  fees: "Approximately ₹16-20 Lakhs (4 years)",

  entranceExam: "MET",

  cutoff: {
    year: 2025,
    exam: "MET",
    branch: "Computer Science Engineering",
    category: "OPEN",
    gender: "All",
    quota: "All India",
    round: 1,
    openingRank: 1,
    closingRank: 10000,
  },

  courses: [
    "Computer Science Engineering",
    "Information Technology",
    "Electronics Engineering",
  ],

  placement: {
    averagePackage: "₹10-12 LPA",
    highestPackage: "₹50 LPA+",
  },

  description:
    "Manipal Institute of Technology provides strong engineering programs with excellent infrastructure and industry exposure.",

  reviews: [
    {
      comment: "Great campus experience and academics.",
      name: "Karan Patel",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Good research opportunities and clubs.",
      name: "Sneha Rao",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Strong alumni network.",
      name: "Vivek Singh",
      branch: "IT",
      year: "4th Year",
    },
  ],
},

{
  id: 26,
  name: "SRM Institute of Science and Technology",
  shortDescription:
    "A popular private university offering engineering programs with strong industry connections.",
  keywords: [
    "SRM",
    "SRMIST",
    "SRM KTR",
  ],
  location: "Chennai",
  state: "Tamil Nadu",
  type: "Private",
  establishedYear: 1985,
  rating: 4.3,

  fees: "Approximately ₹10-15 Lakhs (4 years)",

  entranceExam: "SRMJEEE",

  cutoff: {
    year: 2025,
    exam: "SRMJEEE",
    branch: "Computer Science Engineering",
    category: "OPEN",
    gender: "All",
    quota: "All India",
    round: 1,
    openingRank: 1,
    closingRank: 5000,
  },

  courses: [
    "Computer Science Engineering",
    "Artificial Intelligence",
    "Electronics Engineering",
  ],

  placement: {
    averagePackage: "₹7-9 LPA",
    highestPackage: "₹50 LPA+",
  },

  description:
    "SRMIST is a well-known private university offering engineering education, research facilities, and placement opportunities.",

  reviews: [
    {
      comment: "Good infrastructure and career opportunities.",
      name: "Aditya Kumar",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Good technical clubs and events.",
      name: "Meera Shah",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Supportive faculty and campus life.",
      name: "Rohan Das",
      branch: "AI Engineering",
      year: "4th Year",
    },
  ],
},

{
  id: 27,
  name: "Amrita Vishwa Vidyapeetham",
  shortDescription:
    "A leading private university known for engineering education, research, and innovation.",
  keywords: [
    "Amrita",
    "Amrita University",
    "Amrita School of Engineering",
  ],
  location: "Coimbatore",
  state: "Tamil Nadu",
  type: "Private",
  establishedYear: 2003,
  rating: 4.3,

  fees: "Approximately ₹10-15 Lakhs (4 years)",

  entranceExam: "AEEE",

  cutoff: {
    year: 2025,
    exam: "AEEE",
    branch: "Computer Science Engineering",
    category: "OPEN",
    gender: "All",
    quota: "All India",
    round: 1,
    openingRank: 1,
    closingRank: 5000,
  },

  courses: [
    "Computer Science Engineering",
    "Artificial Intelligence",
    "Electronics Engineering",
  ],

  placement: {
    averagePackage: "₹7-10 LPA",
    highestPackage: "₹50 LPA+",
  },

  description:
    "Amrita Vishwa Vidyapeetham is a reputed private university offering engineering programs with focus on research and innovation.",

  reviews: [
    {
      comment: "Good academics and peaceful campus environment.",
      name: "Harish Kumar",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Strong faculty support and learning culture.",
      name: "Divya Nair",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Good placement preparation programs.",
      name: "Sanjay Rao",
      branch: "AI Engineering",
      year: "4th Year",
    },
  ],
},

{
  id: 28,
  name: "Thapar Institute of Engineering and Technology",
  shortDescription:
    "A reputed private engineering institute known for academics, research, and industry partnerships.",
  keywords: [
    "Thapar",
    "TIET",
    "Thapar University",
  ],
  location: "Patiala",
  state: "Punjab",
  type: "Private",
  establishedYear: 1956,
  rating: 4.4,

  fees: "Approximately ₹12-18 Lakhs (4 years)",

  entranceExam: "JEE Main",

  cutoff: {
    year: 2025,
    exam: "JEE Main",
    branch: "Computer Science Engineering",
    category: "OPEN",
    gender: "All",
    quota: "All India",
    round: 1,
    openingRank: 1,
    closingRank: 30000,
  },

  courses: [
    "Computer Science Engineering",
    "Electronics Engineering",
    "Mechanical Engineering",
  ],

  placement: {
    averagePackage: "₹10-12 LPA",
    highestPackage: "₹50 LPA+",
  },

  description:
    "Thapar Institute is one of India's established private engineering institutes with strong academic programs and industry connections.",

  reviews: [
    {
      comment: "Excellent infrastructure and industry exposure.",
      name: "Rahul Bansal",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Good placements and campus facilities.",
      name: "Simran Kaur",
      branch: "ECE",
      year: "3rd Year",
    },
    {
      comment: "Great opportunities for technical growth.",
      name: "Aman Verma",
      branch: "Mechanical",
      year: "4th Year",
    },
  ],
},

{
  id: 29,
  name: "RV College of Engineering",
  shortDescription:
    "A top private engineering college in Karnataka known for placements and technical excellence.",
  keywords: [
    "RVCE",
    "RV College",
    "RV Engineering",
  ],
  location: "Bangalore",
  state: "Karnataka",
  type: "Private",
  establishedYear: 1963,
  rating: 4.5,

  fees: "Approximately ₹8-12 Lakhs (4 years)",

  entranceExam: "KCET",

  cutoff: {
    year: 2025,
    exam: "KCET",
    branch: "Computer Science Engineering",
    category: "OPEN",
    gender: "All",
    quota: "State",
    round: 1,
    openingRank: 1,
    closingRank: 500,
  },

  courses: [
    "Computer Science Engineering",
    "Information Science",
    "Electronics Engineering",
  ],

  placement: {
    averagePackage: "₹10-14 LPA",
    highestPackage: "₹60 LPA+",
  },

  description:
    "RV College of Engineering is among India's top private engineering colleges with excellent placement records.",

  reviews: [
    {
      comment: "Excellent placement opportunities.",
      name: "Karthik Rao",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Strong coding culture and industry exposure.",
      name: "Pooja Shetty",
      branch: "ISE",
      year: "3rd Year",
    },
    {
      comment: "Great technical clubs and academics.",
      name: "Vishal Kumar",
      branch: "ECE",
      year: "4th Year",
    },
  ],
},{
  id: 30,
  name: "PES University",
  shortDescription:
    "A leading private university known for engineering programs, technology focus, and placements.",
  keywords: [
    "PES",
    "PES University",
    "PES Bangalore",
  ],
  location: "Bangalore",
  state: "Karnataka",
  type: "Private",
  establishedYear: 1972,
  rating: 4.4,

  fees: "Approximately ₹10-15 Lakhs (4 years)",

  entranceExam: "KCET",

  cutoff: {
    year: 2025,
    exam: "KCET",
    branch: "Computer Science Engineering",
    category: "OPEN",
    gender: "All",
    quota: "State",
    round: 1,
    openingRank: 1,
    closingRank: 1000,
  },

  courses: [
    "Computer Science Engineering",
    "Artificial Intelligence",
    "Electronics Engineering",
  ],

  placement: {
    averagePackage: "₹10-12 LPA",
    highestPackage: "₹50 LPA+",
  },

  description:
    "PES University offers technology-focused education with strong placement opportunities and industry-oriented curriculum.",

  reviews: [
    {
      comment: "Strong academics and placement support.",
      name: "Nikhil Sharma",
      branch: "Computer Science",
      year: "4th Year",
    },
    {
      comment: "Good technical environment and faculty.",
      name: "Ananya Rao",
      branch: "AI Engineering",
      year: "3rd Year",
    },
    {
      comment: "Good opportunities in software careers.",
      name: "Rohan Patel",
      branch: "ECE",
      year: "4th Year",
    },
  ],
},  


];