import { Home } from '@pages/Home';
import { FC } from 'react';
import { Navigate, Route as ReactRoute, Routes as ReactRoutes, BrowserRouter as Router } from 'react-router-dom';
import { paths } from './paths';

export const Routes: FC = () => {
  return (
    <Router>
      <ReactRoutes>
        {/** Public routes */}
        <ReactRoute path="*" element={<Navigate to={paths.root.pattern} />} />
        <ReactRoute index path={paths.root.pattern} element={<Home />} />
      </ReactRoutes>
    </Router>
  );
};
