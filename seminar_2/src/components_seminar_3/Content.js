// import ThemeSwitcher from './ThemeSwitcher';

function Content({ state }) {
  return (
    <>
      <div
        className="box"
        style={
          state === "light"
            ? { background: "bisque", color: "brown" }
            : { background: "brown", color: "bisque" }
        }
      >
        <h1 className="title">Смена темы</h1>
      </div>
    </>
  );
}

export default Content;
