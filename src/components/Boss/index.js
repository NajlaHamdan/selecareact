import classes from "./boss.module.css";
export default function Boss() {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.circleImg}>
          <img src="personal.jpg" alt="boss" />
        </div>
        <div className={classes.redCircle}></div>
        {/* <div className={classes.smallRed}></div>
        <div className={classes.smallBlue}></div> */}
        <div className={classes.blueCircle}></div>
      </div>
      <div className={classes.desc}>
        <h2 className={classes.heading}>رئيس مجلس الأدارة</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          blanditiis cupiditate voluptatibus quam ex, repellendus ullam ipsam
          corrupti maiores perferendis quod doloremque, laboriosam dignissimos
          voluptates porro eaque itaque tenetur nulla?
        </p>
      </div>
    </div>
  );
}
