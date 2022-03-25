function NavButton(props) {
  return (
    <div className=" flex justify-center">
      <div>
        <button className="bg-slate-700 hover: bg-red-700">{props.text}</button>
      </div>
    </div>
  );
}

export default NavButton;
