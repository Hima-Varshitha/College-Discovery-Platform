type RankCutoff = {
  year: number;
  exam: string;
  branch: string;
  category: string;
  gender: string;
  quota: string;
  round: number;
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
  reviews: string[];
};

export const colleges: College[] = [
  {
    id: 1,
    name: "Indian Institute of Technology Bombay",
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
      "Excellent academic environment",
      "Strong placement opportunities",
      "Great research facilities",
    ],
  },

  {
    id: 2,
    name: "Indian Institute of Technology Delhi",
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
      "Excellent faculty",
      "Strong alumni network",
      "Great campus opportunities",
    ],
  },

  {
    id: 3,
    name: "Indian Institute of Technology Madras",
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
      "Top-ranked engineering institute",
      "Excellent research culture",
      "Strong placements",
    ],
  },

  {
    id: 4,
    name: "National Institute of Technology Warangal",
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
      "Excellent technical education",
      "Good placement record",
      "Strong student community",
    ],
  },

  {
    id: 5,
    name: "Birla Institute of Technology and Science Pilani",
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
      "Excellent campus culture",
      "Strong industry connections",
      "Flexible academic system",
    ],
  },
];