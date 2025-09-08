import "./LayoutDefault.scss";

function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">Logo</div>
          <div className="menu">
           
          </div>
        </header>
        <main className="layout-default__main">
          Nội dung chính...
        </main>
        <footer className="layout-default__footer">
          Copyright @ 2023 by 28Tech
        </footer>
      </div>
    </>
  )
}

export default LayoutDefault;