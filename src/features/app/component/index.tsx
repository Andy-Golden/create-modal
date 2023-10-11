import "./styles.css";

type PropsModal = {
  header: string;
  title: string;
  body: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export function Modal({
  header,
  title,
  body,
  visible,
  setVisible,
}: PropsModal) {
  const handleClick = () => {
    setVisible(false);
  };

  return (
    <div className={`bg-cover ${visible ? "modal-visible" : ""}`}>
      <div className={`modal ${visible ? "modal-animation" : ""}`}>
        <div className="modal__header">
          <p>{header}</p>
          <i
            className="fas fa-times"
            style={{ color: "#fafafa" }}
            onClick={handleClick}
          ></i>
        </div>
        <h1 className="modal__title">{title}</h1>
        <p className="modal__body">{body}</p>
        <div className="modal__footer">
          <button className="btn-close" onClick={handleClick}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
