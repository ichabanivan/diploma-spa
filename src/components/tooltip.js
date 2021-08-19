
// outsource dependencies
import PropTypes from 'prop-types';
import TooltipTrigger from 'react-popper-tooltip';
import React, { memo, useCallback, useMemo, useState } from 'react';

/**
 * Show form error using prepared popover
 */
export const Tooltip = memo(({ message, placement, children, ...attr }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenTrue = useCallback(() => setIsOpen(true), []);
  const setIsOpenFalse = useCallback(() => setIsOpen(false), []);
  // eslint-disable-next-line react/prop-types
  const tooltip = useMemo(() => ({ getTooltipProps, getArrowProps, tooltipRef, arrowRef, placement }) => <div
    {...getTooltipProps({ ref: tooltipRef, className: 'tooltip-container p-0' })}
  >
    <div {...getArrowProps({ ref: arrowRef, 'data-placement': placement, className: 'tooltip-arrow' })} />
    <div className="popover-body"> { message } </div>
  </div>, [message]);
  return <div
    className="d-inline-flex"
    onMouseEnter={setIsOpenTrue}
    onMouseLeave={setIsOpenFalse}
  >
    <TooltipTrigger
      {...attr}
      tooltip={tooltip}
      placement={placement}
      tooltipShown={isOpen}
    >
      { ({ getTriggerProps, triggerRef }) => <div {...getTriggerProps({ ref: triggerRef })}>
        { children }
      </div> }
    </TooltipTrigger >
  </div>;
});
Tooltip.propTypes = {
  message: PropTypes.string,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
};
Tooltip.defaultProps = {
  message: null,
  placement: null,
};

export default Tooltip;
