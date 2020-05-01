import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import moment from 'moment';
import Header from '../components/Header';
import VIEW_TRANSACTION from '../apollo/viewTransaction';
import Loader from '../components/Loader';

const ViewTransaction = props => {
  const [card, setCard] = useState({});
  const {loading, data, error} = useQuery(VIEW_TRANSACTION, {variables: {
    tnx_id: props.match.params.tnx_id
  }});

  useEffect(() => {
    if (!loading) {
      if (data) {
        const {Transaction} = data;
        setCard(Transaction);
      }

      if (error) {
        console.log(error, 'err')
      }
    }
  }, [loading, data, error])

  return (
    <section>
      <Header color="#fff" />
      {!loading ? (
        <>
        <section id="viewTransaction">
          
            <div className="transactionDetail">
              <p>{card.tnx_id}</p>
              <h1>{card.user}</h1>
              <p>{moment(Number(card.date)).format('Do, MMMM YYYY')}</p>
            </div>
          
        </section>
        <section id="transactionDescription">
          {card.description}
        </section>
        </>
      ) : (<Loader />)}
    </section>
  )
}

export default ViewTransaction;
