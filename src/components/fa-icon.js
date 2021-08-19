
// outsource dependencies
import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fas);

export default FontAwesomeIcon;

export const FasIcon = memo(({ icon, ...attr }) => {
  const fasIcon = useMemo(() => ['fas', icon], [icon]);
  return <FontAwesomeIcon icon = {fasIcon} {...attr} />;
});
FasIcon.propTypes = { icon: PropTypes.string.isRequired };
