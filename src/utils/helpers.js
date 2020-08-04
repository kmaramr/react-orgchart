export const getName = data => data.entity?.name;

export const getTitle = data => data.entity?.title;

export const getSubTitle = data => data.entity?.subTitle;

export const getCount = data => {
  let reports = data.children?.length ?? data._children?.length;
  if (!reports) {
    return '';
  }

  // return `${count} Reports`;
  return data._children === null ? 'Collapse' : 'Expand';
};

export const getCursorForNode = data =>
  data.children || data._children || data.hasChild ?
    'pointer' :
    'default';

export const customOnClick = (fn, onClick, config) => data => {
  if (typeof fn === 'function') {
    if (fn(data, d3.event)) {
      onClick(config);
    } else {
      d3.event.stopPropagation();
    }
  }
};
