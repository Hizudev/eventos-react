const InfoBox = ({ info, ...rest }) => {
  const infoList = info.map((msg) => <li key={msg}>{msg}</li>);
  return <ul {...rest}>{infoList}</ul>;
};

export default InfoBox;
