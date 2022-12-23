export const jumpersStyle = (props) => {
  return {
    borderWidth: 10,
    borderBottomColor: props?.colors[0],
    borderTopColor: props?.colors[1],
    borderLeftColor: props?.colors[2],
    borderRightColor: props?.colors[3],
    ...props?.sizes,
    borderRadius: 125,
    alignItems: 'center',
    justifyContent: 'center',
    top: props?.pos || 0,
    position: 'absolute',
  };
};
