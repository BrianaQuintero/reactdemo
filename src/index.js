import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cards from './components/Cards';

const items = [
  {
    id: 1,
    title: "Uno",
    content: "Curabitur iaculis pretium tempus. Nullam neque purus, laoreet in lorem in, tempor rhoncus nunc.",
    url: "https://foodandtravel.mx/wp-content/uploads/2017/02/Tacos-tradicionales.jpg",
    alt: "tacosA"
  },
  {
    id: 2,
    title: "Dos",
    content: "Pellentesque a nibh non dolor auctor commodo vitae a lacus. Fusce lacinia vulputate posuere.",
    url: "https://media.istockphoto.com/photos/spicy-homemade-beef-barbacoa-tacos-picture-id960337396?k=20&m=960337396&s=612x612&w=0&h=WLIwmN5GudoZYeBChYdG8y-L12wW3bGtWBmXHyUJ1DQ=",
    alt: "tacosB"
  },
  {
    id: 3,
    title: "Tres",
    content: "Aliquam odio lectus, viverra eget libero et, semper malesuada dolor. Nam non magna consequat, vehicula lacus non, lobortis odio.",
    url: "https://st.depositphotos.com/1328914/3359/i/950/depositphotos_33590291-stock-photo-mexican-food.jpg",
    alt: "tacosC"
  },
]

ReactDOM.render(
  <React.StrictMode>
    <Cards items={items} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
