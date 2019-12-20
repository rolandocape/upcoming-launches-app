import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LaunchItem from './LaunchItem/LaunchItem';
import { getUpcomingLaunches } from '../services/launches';

function Home() {
    const [futureLaunches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!futureLaunches.length) {
            getLaunches();
        }
    }, []);

    const getLaunches = async () => {
        const { results } = await getUpcomingLaunches();
        setLaunches(results);
        setLoading(false);
    };

    return (
      <div>
          {loading && <h2>Loading...</h2>}
          {!loading && futureLaunches.map(launch => (
              <Link key={launch.id}
                    style={{ textDecoration: 'none', color: '#333333' }}
                    to={`launches/${launch.id}`}>
                  <LaunchItem launch={launch} />
              </Link>
          ))}
      </div>
    )
}

export default Home;