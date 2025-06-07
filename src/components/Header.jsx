import '../styles/Header.css';

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-content">
        <p className="date-line">30 | 11 | 30</p>
        <p className="day">SATURDAY</p>
        <p className="datetime">2030.11.30 SAT 14:00 PM</p>
      </div>

      <div className="header-image">
        <img src="/main.jpg" alt="wedding" />
      </div>

      <div className="header-footer">
        <p className="name"><strong>연아윤</strong> &nbsp; | &nbsp; <strong>전영호</strong></p>
        <p className="holl">웨딩그룹위더스 영등포 펠리체홀</p>
      </div>
    </header>
  );
}

export default Header;
