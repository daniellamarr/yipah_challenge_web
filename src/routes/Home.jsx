import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import Header from '../components/Header';
import Card from '../components/Card';
import TRANSACTIONS from '../apollo/transactions';
import Loader from '../components/Loader';

const Home = () => {
  const [cards, setCards] = useState([]);
  const {loading, data, error} = useQuery(TRANSACTIONS);

  useEffect(() => {
    if (!loading) {
      if (data) {
        const {AllTransactions} = data;
        setCards(AllTransactions);
      }

      if (error) {
        console.log(error, 'err')
      }
    }
  }, [loading, data, error])

  return (
    <section>
      <Header />
      <main>
        <div className="cards">
          {!loading ? (
            cards.map((card, index) => (
            <Card key={index} card={card} />
          ))) : <Loader />}
        </div>
      </main>
    </section>
  )
}

export default Home;
