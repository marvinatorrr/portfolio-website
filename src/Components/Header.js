function Header(props) {
  function CheckUnderline(underline) {
    if (underline) {
      return (
        <h1 className="underline font-bold underline-offset-2">
          {props.title}
        </h1>
      );
    }
    return <h1 className="font-bold">{props.title}</h1>;
  }

  return CheckUnderline(props.underline);
}

export default Header;
