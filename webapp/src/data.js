/**
 * Dummy data from static site
 *
 * TODO: Use data from Movies API instead
 */

const showings = [
  { id: 'showing1', cinema: { id: 'cinema1', name: 'Cinema 1' }, time: '16:00' },
  { id: 'showing2', cinema: { id: 'cinema1', name: 'Cinema 1' }, time: '18:00' },
  { id: 'showing3', cinema: { id: 'cinema1', name: 'Cinema 1' }, time: '20:00' },
  { id: 'showing4', cinema: { id: 'cinema2', name: 'Cinema 2' }, time: '15:00' },
  { id: 'showing5', cinema: { id: 'cinema3', name: 'Cinema 3' }, time: '10:00' },
  { id: 'showing6', cinema: { id: 'cinema3', name: 'Cinema 3' }, time: '12:00' },
]

const movies = [
  {
    id: "movie1",
    title: "Movie 1",
    rating: 2,
    genre: ["Comedy", "SciFi"],
    poster: 'http://via.placeholder.com/1280x1920',
    plot: "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...",
    showings
  },
  {
    id: "movie2",
    title: "Movie 2",
    rating: 4,
    genre: ["Action", "SciFi"],
    poster: 'http://via.placeholder.com/1280x1920',
    plot: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.",
    showings
  },
  {
    id: "movie3",
    title: "Movie 3",
    rating: 4,
    genre: ["Drama"],
    poster: 'http://via.placeholder.com/1280x1920',
    plot: "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.",
    showings
  },
  {
    id: "movie4",
    title: "Movie 4",
    rating: 5,
    genre: ["Action", "Drama"],
    poster: 'http://via.placeholder.com/1280x1920',
    plot: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.",
    showings
  },
  {
    id: "movie5",
    title: "Movie 5",
    rating: 4,
    genre: ["Action", "SciFi"],
    poster: 'http://via.placeholder.com/1280x1920',
    plot: "Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.",
    showings
  },
  {
    id: "movie6",
    title: "Movie 6",
    rating: 3,
    genre: ["Comedy", "SciFi"],
    poster: 'http://via.placeholder.com/1280x1920',
    plot: "Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.",
    showings
  },
  {
    id: "movie7",
    title: "Movie 7",
    rating: 2.5,
    genre: ["Action", "Drama"],
    poster: 'http://via.placeholder.com/1280x1920',
    plot: "Just say anything, George, say what ever's natural, the first thing that comes to your mind. Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine. You do? Yeah, it's 8:00. Hey, McFly, I thought I told you never to come in here. Well it's gonna cost you. How much money you got on you?",
    showings
  }
]

export default {
  movies
}