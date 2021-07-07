
// outsource dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Popover from 'react-popper-tooltip';

// local dependencies

const HoveredPopover = memo(({ isOpen, usePopover, children, message, setOpen, inline }) => <Popover
  tooltipShown={isOpen}
  placement={usePopover}
  onVisibilityChange={setOpen}
  tooltip={({ getTooltipProps, getArrowProps, tooltipRef, arrowRef, placement }) => <div
    {...getTooltipProps({ ref: tooltipRef, className: 'tooltip-container p-0' })}
  >
    <div {...getArrowProps({ ref: arrowRef, 'data-placement': placement, className: 'tooltip-arrow' })} />
    <div className="popover-body">
      { message }
    </div>
  </div>}
>
  { ({ getTriggerProps, triggerRef }) => <div className={cx({ 'd-inline-block': inline })} {...getTriggerProps({ ref: triggerRef })}>
    { children }
  </div> }
</Popover>);
HoveredPopover.propTypes = {
  inline: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
  usePopover: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
};
HoveredPopover.defaultProps = {
  inline: false,
  usePopover: 'top',
};
export default HoveredPopover;
