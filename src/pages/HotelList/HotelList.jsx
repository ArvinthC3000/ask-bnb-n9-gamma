import Header from '../shared/Header';
import Footer from '../shared/Footer';
import styles from './HotelList.module.css';
import HotelListItem from './HotelListItem';
import { connect } from 'react-redux';
import { getHotels } from '../../actions/hotelAction';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import NoHotels from './NoHotels';

const moment = extendMoment(Moment);

const HotelList = ({
  hotel: { filter, hotelList, loading },
  getHotels,
  history,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [range1, setRange1] = useState(null);
  const range1 = moment.range(startDate, endDate);

  useEffect(() => {
    getHotels(filter.location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStartDate(filter.startDate);
    setEndDate(filter.endDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // HOF
  const getIndividualItems = () => {
<<<<<<< HEAD
    return hotelList.map((item) => (
      <HotelListItem styles={styles} data={item} />
=======
    return hotelList.map(item => (
      <HotelListItem
        key={item._id}
        styles={styles}
        data={item}
        history={history}
      />
>>>>>>> 57366a869b3217846bd929566ecb509cf98c1b56
    ));
  };

  return (
    <>
      <div>
        <Header color="#2E2E2E" />
        <div className={styles.listSummary} data-testid="listsummary">
          <div className={styles.filterDetails}>
            100+ stays | {moment(startDate).format('Do MMMM')} to{' '}
            {moment(endDate).format('Do MMMM')} | {range1.diff('days')} days |{' '}
            {filter.guests} guests
          </div>
          <div className={styles.locationDetails}>
            Stay in{' '}
            {filter.location.replace(
              /(^\w{1}|\.\s*\w{1})/gi,
              function (toReplace) {
                return toReplace.toUpperCase();
              }
            )}
          </div>
        </div>
<<<<<<< HEAD
        <div className={styles.hotelListWrapper} data-testid="hotellist">
          {getIndividualItems()}
=======
        <div className={styles.hotelListWrapper}>
          {hotelList.length ? getIndividualItems() : <NoHotels />}
>>>>>>> 57366a869b3217846bd929566ecb509cf98c1b56
        </div>
      </div>
      <Footer className={styles.footerContainer} />
    </>
  );
};

HotelList.propType = {
  hotel: PropTypes.array.isRequired,
  getHotels: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  hotel: state.hotel,
});

export default connect(mapStateToProp, { getHotels })(HotelList);
