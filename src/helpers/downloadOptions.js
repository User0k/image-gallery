function downloadOptions(image) {
  const originHeight = parseInt(image.height, 10);
  const originWidth = parseInt(image.width, 10);
  const calcHeight = width => parseInt(originHeight * width / originWidth);

  const OPTIONS = [
    {
      size: 'small',
      width: 640,
    },
    {
      size: 'medium',
      width: 1080,
    },
    {
      size: 'large',
      width: 1920,
    },
    {
      size: 'original',
      width: originWidth,
    },
  ];

  return OPTIONS.reduce((dimension, option, index) => {
    if (option.width <= originWidth) {
      dimension.push(option);
      dimension[index].height = calcHeight(option.width);
    }

    return dimension;
  }, []);
}

export default downloadOptions;
