import { Fragment } from 'react';

import TechSummary from './TechSummary';
import AvailableTech from './AvailableTech';

const Tech = () => {
  return (
    <Fragment>
      <TechSummary />
      <AvailableTech />
    </Fragment>
  );
};

export default Tech;