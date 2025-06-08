import useCopyClipboard from '../hooks/useCopyClipboard';
import '../styles/AccountInfo.css';

function AccountInfo() {
  const groomCopy = useCopyClipboard();
  const brideCopy = useCopyClipboard();

  const groomAccount = {
    name: "전영호",
    bank: "카카오뱅크",
    number: "7777020333613"
  };

  const brideAccount = {
    name: "연아윤",
    bank: "카카오뱅크",
    number: "7777019925749"
  };

  return (
    <section className="account-info">
      <h2 className="account-title">마음을 전하는 곳</h2>

      <div className="account-line">
        <span className="account-label">신랑측 계좌번호</span>
        <span className="account-text">
          {groomAccount.name} {groomAccount.bank} {groomAccount.number}
        </span>
        <button
          className="copy-button"
          onClick={() => groomCopy.copy(`${groomAccount.number}`)}
        >
          📋
        </button>
      </div>
      {groomCopy.copied && <p className="copied-message">계좌번호가 복사되었습니다.</p>}

      <div className="account-line">
        <span className="account-label">신부측 계좌번호</span>
        <span className="account-text">
          {brideAccount.name} {brideAccount.bank} {brideAccount.number}
        </span>
        <button
          className="copy-button"
          onClick={() => brideCopy.copy(`${brideAccount.number}`)}
        >
          📋
        </button>
      </div>
      {brideCopy.copied && <p className="copied-message">계좌번호가 복사되었습니다.</p>}
    </section>
  );
}

export default AccountInfo;
