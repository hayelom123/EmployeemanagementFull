import { ModalStyle } from "../styles/modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../components/redux/store/store";
import { errorSetter } from "../components/redux/action";
export default function Modal() {
  const { error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(errorSetter({ ...error, open: false }));
  };
  if (error.open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {error.open && (
        <ModalStyle>
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2 className={error.failed ? "failed" : "success"}>
                {error.message}
              </h2>

              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </ModalStyle>
      )}
    </>
  );
}
