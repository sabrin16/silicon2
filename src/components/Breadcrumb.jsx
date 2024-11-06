import React from 'react'
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <section className="page-title">
        <div className="container">
            <h1>{pathnames[pathnames.length - 1]?.replace(/-/g, ' ') || 'Home'}</h1>
            <ul className="breadcrumb">
                <li><Link to="/"></Link></li>
                {
                  pathnames.map((value,index) => {
                      const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                      return (
                        <li key={to}>
                            { index === pathnames.length - 1 
                            ? (<span>{value.replace(/-/g, ' ')}</span>)
                            : (<Link to={to}>{value.replace(/-/g, ' ')} </Link>)}
                        </li>
                      );
                  })
                }
            </ul>
        </div>
    </section>
  );
};

export default Breadcrumb