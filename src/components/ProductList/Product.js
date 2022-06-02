import React from "react";
import classes from "./Product.module.css";
import { Box, Typography, Modal } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "65vh",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
export default function Product(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { title, desription, size, img } = props;
  function btnClick() {
    console.log("btnClick");
    if (!validData()) {
      console.log("if condition");
      return false;
    }
  }
  function validData() {}
  return (
    <div>
      <div className={classes.product} onClick={handleOpen}>
        <img src={img} alt={title} />
        <h1>{title}</h1>
        {/* <p>{desription}</p> */}
        <div>
          <Modal
            open={open}
            onClick={handleClose}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* <ModalHeader>{title}</ModalHeader> */}
              <div className={classes.modal}>
                <div className={classes.formImg}>
                  <img src={img} alt="title" />
                </div>
                <div>
                  <form>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <p className={classes.heading}>{title}</p>
                      {/* <ModalHeader>{title}</ModalHeader> */}
                      {/* <ModalClosebutton /> */}
                      {/* <ModalBody> */}
                      {/* <label> الحجم بالملي لتر</label> */}
                      <select required>
                        <option value={""}>الحجم بالملي لتر</option>
                        {size.map((item, index) => {
                          return <option value={index}>{item}</option>;
                        })}
                      </select>
                      {/* <label>الكمية</label> */}
                      <input placeholder="الكمية" type="number" required />
                      {/* <label>الأيميل</label> */}
                      <input placeholder="الأيميل" type="email" required />
                      {/* <label>رقم الجوال</label> */}
                      <input placeholder="رقم الجوال" type="text" required />
                    </Typography>
                    {/* </ModalBody> */}

                    {/* <ModalFooter> */}
                    <div className={classes.buttons}>
                      <button
                        className={classes.orderButton}
                        type="submit"
                        onclick="return btnClick();"
                      >
                        إرسال الطلب
                      </button>
                      <button
                        className={classes.cancelButton}
                        onClose={handleClose}
                      >
                        إلغاء
                      </button>
                    </div>
                    {/* </ModalFooter> */}
                  </form>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
