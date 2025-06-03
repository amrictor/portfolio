


import anim1024 from '../../assets/projects/anim1024.gif';
import brushonoff from '../../assets/projects/brushonoff.gif';
import brushsize from '../../assets/projects/brushsize.gif';
import carving from '../../assets/projects/carving.gif';
import congo from '../../assets/projects/congogameplay.gif';
import ldr1 from '../../assets/projects/ldr1.jpg';
import ldr3 from '../../assets/projects/ldr3.jpg';
import lumberjack from '../../assets/projects/lumberjack.png';
import poem1 from '../../assets/projects/poem1.png';
import poem2 from '../../assets/projects/poem2.png';
import rePiTile from '../../assets/projects/rePiTile.jpg';
import rotate from '../../assets/projects/rotate.gif';
import versed1 from '../../assets/projects/versed1.gif';
import versed2 from '../../assets/projects/versed2.png';
import versed3 from '../../assets/projects/versed3.png';
import versed4 from '../../assets/projects/versed4.png';
import versed5 from '../../assets/projects/versed5.png';
import wordsmyth1 from '../../assets/projects/wordsmyth1.gif';
import wordsmyth2 from '../../assets/projects/wordsmyth2.png';

const data = [
  {
    images: [{src: versed1, alt:'versed'},{src: versed2, alt:'versed'},{src: versed3, alt:'versed'},{src: versed4, alt:'versed'},{src: versed5, alt:'versed'}], 
    title: 'Versed', 
    link: 'https://versed.amrictor.com',
    github: 'https://github.com/amrictor/versed',
    tags: ['React', 'JavaScript'],
    description: 'Browser based game written in React and Node, which obtains song data and lyrics with help from the Spotify and Genius APIs and serves it to the user in a quiz format. Users can log in with their Spotify accounts to use their own playlists.'
  }, 
  {
    images:[
      {src: carving, alt:'subtractive art'}, 
      {src: brushonoff, alt:'subtractive art'}, 
      {src: brushsize, alt:'subtractive art'}, 
      {src: rotate, alt:'subtractive art'}
    ], 
    title: 'Subtractive Art in Virtual Reality', 
    github: 'https://github.com/csu-hci-projects/Subtractive_Art-v1.0',
    tags: ['Unity', 'C#'],
    description: 'A program for creating three dimensional digital voxel art using Oculus technology. It was developed as a part of a user experience study comparing digital and physical forms of subtractive art.'
  }, 
  {
    images:[{src: lumberjack, alt: 'Lumberjack'}],
    title: 'Lumberjack',
    description:
    <div>
      A service for procesing and displaying interconnected microservice logs. It consisted of three main parts: a robust C# parsing system that processed new logs every 
      night, a PostgresQL database to store the parsed information and a Node GraphQL server to access it, and the ReactJS 
      interface built to display linked events in a flow that accurately emulated data flow across multiple machines using 
      different time servers.
    </div>
  },
  {
    images: [{src: anim1024, alt:'raytracer'}], 
    title: 'Ray Tracing Engine', 
    github: 'https://github.com/amrictor/ray-tracer',
    tags: ['C++'],
    description:  'Recursive ray tracing rendering engine in C++ which produces images or animations of 3D space containing transformed objects and spheres'
  }, 
  {
    images: [{src: wordsmyth1, alt:'wordsmyth'}, {src: wordsmyth2, alt:'wordsmyth'}], 
    title: 'Wordsmyth', 
    link: 'https://wordsmyth.amrictor.com',
    github: 'https://github.com/amrictor/wordsmyth-2.0',
    tags: ['React', 'Javascript', 'Java', 'Python'],
    description: 'A "Jackbox" style browser based party game where a rotating judge selects a forgotten idiom and other players are shown the first half of the quote and challenged to write their own ending. In a subsequent round, everyone votes for the quote they think is the original. I have been writing and rewriting this particular game for a long time now. The current iteration runs on a Java websocket server with a React webpage, but I\'ve begun writing an updated Node version of the server. The quote data it relies on has been scraped from a few different sources and processed using a couple of Python scripts. '
  }, 
  {
    images: [{src: poem1, alt:'linguistics'}, {src: poem2, alt:'linguistics'}], 
    title: 'Linguistics and Text Prediction', 
    github: 'https://github.com/amrictor/MachineLearningFinal',
    report: 'https://nbviewer.jupyter.org/github/amrictor/MachineLearningFinal/blob/master/FinalProject/RictorProjectReport.ipynb',
    tags: ['Python', 'Java'],
    description: 'Linguistic processing and text generation using Markov chains and recurrent neural networks to create computer generated poetry trained on open source collections of poetry in the public domain.'
  }, 
  {
    images: [{src: congo, alt:'congo'}], 
    title: 'Congo Online', 
    github: 'https://github.com/cs414-byte-mechanics/cs414-f19-001-ByteMechanics',
    tags: ['React', 'JavaScript', 'Java', 'MySQL'],
    description: 'A browser based game with a full user registration system for simultaneous or asynchronous play of a chess variant called "Congo". This runs on a Java server using websockets and stores game states and user data in a MySQL database. The main interface is a React webpage.'
  }, 
  {
    images: [{src: rePiTile, alt:'rePiTile'}, {src: ldr3, alt:'light resistor trip wire'}, {src: ldr1, alt:'light resistor trip wire'}], 
    title: 'Physical prototyping and evironmental sensors', 
    tags: ['IoT', 'Python', 'Raspberry Pi'],
    description: 
      <div>
        I love to see the things I create interface with the world outside the screen - it makes them feel real. Developing and interfacing with environmental sensors to learn about a real physical space is something I have a lot of fun with, and have found occasionally extraordinarily useful for things like plant and animal care.
      </div>
  },
];

export default data;