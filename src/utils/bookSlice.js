// src/utils/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: "The Nightingale",
    author: "Kristin Hannah",
    category: "Historical Fiction",
    description: "A powerful story of two sisters in Nazi-occupied France and their different paths toward survival, love, and freedom during World War II.",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681839850i/21853621.jpg",
    moreInfo: "Explores themes of courage, resistance, and the impact of war on women.",
    year: 2015
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    category: "Fiction",
    description: "A young girl known as \"Marsh Girl\" who raised herself in the North Carolina marshes becomes a suspect in the murder of a local man.",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
    moreInfo: "Blends a coming-of-age story with a mystery and observations of nature.",
    year: 2018
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Non-Fiction",
    description: "Provides a proven framework for improving every day, explaining how tiny changes can yield remarkable results.",
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    moreInfo: "Offers practical strategies for building good habits and breaking bad ones.",
    year: 2018
  },
  {
    id: 4,
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    category: "Non-Fiction",
    description: "A groundbreaking work on trauma, explaining how it affects the brain and body and outlining innovative treatments for recovery.",
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594559067i/18693771.jpg",
    moreInfo: "Essential reading for understanding the lasting impact of trauma.",
    year: 2014
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Sci-Fi",
    description: "An astronaut wakes up with amnesia on a space mission and must piece together his identity and his task to save Earth from a celestial phenomenon.",
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
    moreInfo: "Known for its scientific accuracy, humor, and compelling narrative.",
    year: 2021
  },
  {
    id: 6,
    title: "Ender's Game",
    author: "Orson Scott Card",
    category: "Sci-Fi",
    description: "In a future where humanity is threatened by an alien race, a brilliant young boy is sent to battle school in space to be trained as a military commander.",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1408303130i/375802.jpg",
    moreInfo: "Won both the Hugo and Nebula Awards.",
    year: 1985
  },
  {
    id: 7,
    title: "The Guest List",
    author: "Lucy Fokley",
    category: "Mystery",
    description: "A wedding on a remote Irish island turns deadly when one of the guests is found murdered. Everyone has a motive, and no one can leave.",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594068139i/52656911.jpg",
    moreInfo: "A well-crafted locked-room mystery.",
    year: 2020
  },
  {
    id: 8,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Mystery",
    description: "A psychotherapist is determined to uncover the mystery of a famous painter who has not spoken a word since her husband's murder.",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
    moreInfo: "Features a compelling premise and a shocking twist.",
    year: 2019
  },
  {
    id: 9,
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    category: "Romance",
    description: "A PhD student fakes dating a grumpy professor to convince her best friend she's moved on, leading to unexpected romantic complications.",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1611937942i/56732449.jpg",
    moreInfo: "A popular and charming STEMinist romance novel.",
    year: 2021
  },
  {
    id: 10,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    description: "A beloved novel following the emotional development of Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    moreInfo: "One of the most popular novels in English literature.",
    year: 1813
  },
  {
    id: 11,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    description: "The authorized biography of the co-founder of Apple, based on over forty interviews with Jobs himself and interviews with over a hundred family members, friends, adversaries, competitors, and colleagues.",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511288482i/11084145.jpg",
    moreInfo: "Provides deep insight into the complex personality of a tech visionary.",
    year: 2011
  },
  {
    id: 12,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    category: "Biography",
    description: "Tells the story of Henrietta Lacks, a poor black tobacco farmer whose cells were taken without her knowledge in 1951 and became the basis for astonishing medical advances.",
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327878144i/6493208.jpg",
    moreInfo: "Explores issues of medical ethics, race, and social class.",
    year: 2010
  },
  {
    id: 13,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "History",
    description: "A classic work that attempts to explain complex cosmological concepts like black holes and the Big Bang to a general audience.",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1333578746i/3869.jpg",
    moreInfo: "A landmark popular science book.",
    year: 1988
  },
  {
    id: 14,
    title: "The Guns of August",
    author: "Barbara W. Tuchman",
    category: "History",
    description: "Chronicles the exciting and complex opening month of World War I, detailing the military strategies and missteps that led to the trench warfare that defined the conflict.",
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1520778510i/11366.jpg",
    moreInfo: "Won the Pulitzer Prize for General Nonfiction in 1963.",
    year: 1962
  },
  {
    id: 15,
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    category: "Fantasy",
    description: "The first book in the Mistborn series, set in a world ruled by an immortal emperor, where a group of rebels plans to overthrow him using magical abilities based on consuming metals.",
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg",
    moreInfo: "Features a unique and intricate magic system.",
    year: 2006
  },
  {
    id: 16,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    description: "The first book in The Kingkiller Chronicle, telling the story of Kvothe, an adventurer and musician narrating his past from an inn in a small town.",
    rating: 5,
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1270352123i/186074.jpg",
    moreInfo: "Praised for its intricate world-building and beautiful prose.",
    year: 2007
  }
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Find the highest current ID and add 1 to it for the new book's ID
      const maxId = state.reduce((max, book) => (book.id > max ? book.id : max), 0);
      const newBookId = maxId + 1; // Generate the new ID
     
      // Create a new book with the new ID
      const newBook = { ...action.payload, id: newBookId };
     
      // Append the new book to the existing list
      state.push(newBook);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
