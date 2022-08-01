import './App.css';
import Category from './components/Category';
import {
  useState,
  useEffect
} from 'react';

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = "https://mditech-laravel-news.herokuapp.com/api/categories"

    fetchData(url);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setCategories(json.data);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return ( 
    <div className = "App"> 
    {
      categories && categories.map((category) => ( 
        <Category name = {category.category_title} key = {category.category_id} />
      ))
    } 
    </div>
  )
}

export default App;