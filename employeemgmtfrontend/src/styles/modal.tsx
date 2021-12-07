import styled from "styled-components";

export const ModalStyle = styled.div`
  body.active-modal {
    overflow-y: hidden;
  }
  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }
  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
  }
  .modal-content h2 {
    margin-top: 20px;
  }
  .modal-content h2.failed {
    color: red;
  }
  .modal-content h2.success {
    color: green;
  }
  .close-modal {
    position: absolute;
    top: 5px;
    right: 10px;
    padding: 5px 7px;
    background-color: red;
    outline: none;
    border: none;
    border-radius: 10px;
    color: #fff;
  }
`;
