const schemaDefinition = `
type Cinema {
  id: ID!
  name: String!
}

enum Genre {
  Action
  Comedy
  Drama
  SciFi
}

type Showing {
  id: ID!
  cinema: Cinema!
  time: String!
}

type Movie {
  id: ID!
  title: String!
  year: Int
  genre: [Genre]
  plot: String
  rating: Float
  allRatings: [Float]!
  poster: String
  showings: [Showing]!
}

type Query {
  """Number of seconds elapsed since 01.01.1970"""
  unixTime: Int

  """List of all available Cinemas"""
  cinemas: [Cinema]!

  """List of all available movies, in groups of 3. Page argument defaults to 0."""
  movies(page: Int): [Movie]

  """Get a movie by id"""
  movie(id: ID): Movie
}

type Mutation {
  """Rate one movie"""
  rate(id: ID!, rating: Float!): Movie
}
`;
const generateShowings = ({ cinemas, movies, hours }) => {
  let showings = []
  let showingCounter = 0
  cinemas.forEach(cinema => {
    movies.forEach(movie => {
      hours.forEach(hour => {
        showings.push({
          id: `showing${++showingCounter}`,
          movie: movie.id,
          cinema: cinema.id,
          time: hour,
        })
      })
    })
  })
  return showings
}

const cinemas = [
  { id: "cinema1", name: "Cinema City Cotroceni" },
  { id: "cinema2", name: "Grand Cinema" },
  { id: "cinema3", name: "Hollywood Multiplex" },
];

const movies = [
  {
    id: "movie1",
    title: "Guardians of the Galaxy",
    allRatings: [1, 2],
    genre: ["Comedy", "SciFi"],
    poster: 'http://localhost:9000/posters/guardians.jpg',
    plot: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser."

  },
  {
    id: "movie2",
    title: "Matrix",
    allRatings: [2, 1, 5, 5, 5],
    genre: ["Action", "SciFi"],
    poster: 'http://localhost:9000/posters/matrix.jpg',
    plot: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth."
  },
  {
    id: "movie3",
    title: "Forrest Gump",
    allRatings: [2, 4],
    genre: ["Drama"],
    poster: 'http://localhost:9000/posters/forrestgump.jpg',
    plot: "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability."
  },
  {
    id: "movie4",
    title: "Tomb Raider",
    allRatings: [5],
    genre: ["Action", "Drama"],
    poster: 'http://localhost:9000/posters/tombraider.jpg',
    plot: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
  },
  {
    id: "movie5",
    title: "Black Panther",
    allRatings: [4],
    genre: ["Action", "SciFi"],
    poster: 'http://localhost:9000/posters/blackpanther.jpg',
    plot: "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war."
  },
  {
    id: "movie6",
    title: "Pacific Rim",
    allRatings: [3],
    genre: ["Comedy", "SciFi"],
    poster: 'http://localhost:9000/posters/pacificrim.jpg',
    plot: "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns."
  },
  {
    id: "movie7",
    title: "Red Sparrow",
    allRatings: [3,4,5,5],
    genre: ["Action", "Drama"],
    poster: 'http://localhost:9000/posters/redsparrow.jpg',
    plot: "Prima ballerina Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Egorova emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, Dominika meets a CIA agent who tries to convince her that he is the only person she can trust."
  }
];

const showingHours = [
  "10:00",
  "16:00",
  "20:00"
]

const showings = generateShowings({ cinemas, movies, hours: showingHours })

const findCinema = (id) => cinemas.find((cinema) => cinema.id === id);
const findMovie = (id) => movies.find((movie) => movie.id === id);

const avg = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;

const resolvers = {
  Query: {
    unixTime: () => Math.floor(Date.now() / 1000),
    cinemas: () =>
      cinemas.map((cinema, idx) => ({ id: cinema.id, name: cinema.name })),
    movies: (_, args = { page: 0 }) => (
      movies.map((movie, idx) => {
        return {...movie };
      })
    ),
    movie: (_, { id }) => findMovie(id)
  },
  Movie: {
    rating: (movie) => Math.floor(avg(movie.allRatings) * 10) / 10,
    showings: (movie) =>
      showings
        .filter((showing) => showing.movie === movie.id)
        .map((showing) => {
          return {
            id: showing.id,
            cinema: cinemas.find(cinema => cinema.id === showing.cinema),
            time: showing.time,
          };
        }),
  },
  Mutation: {
    rate: (_, { id, rating }) => {
      const movie = findMovie(id);
      if (!movie) throw new Error("Movie does not exist :(");
      movie.allRatings.push(rating);
      return movie;
    },
  },
};

module.exports = { schemaDefinition, resolvers };
