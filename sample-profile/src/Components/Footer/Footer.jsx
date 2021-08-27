import "./Footer.css";
import logo from "../../assets/img/image002.jpg";
const Footer = () => {
  return (
    <div className="footer row p-5">
      <div className="col">
        <div className="w-100">
          <img alt="logo" src={logo} />
        </div>
        <h5>ببرینو، یک سرویس ارسال بین‌المللی فرد‌به‌فرد تضمین شده</h5>
      </div>
      <table className="col">
        <thead className="table-item">تماس با ما</thead>
        <tr className="table-item">تهران، خیابان شریعتی، خیابان میرزا‌پور</tr>
        <tr className="table-item">0912XXXXXXXXX</tr>
        <tr className="table-item">email@test.com</tr>
      </table>
      <table className="col">
        <thead className="table-item">درخواست‌ها</thead>
        <tr className="table-item">ارسال بسته</tr>
        <tr className="table-item">دریافت بسته</tr>
      </table>
      <table className="col">
        <thead className="table-item">آموزش و اطلاعات</thead>

        <tr className="table-item">چطور کار می‌کند؟</tr>
        <tr className="table-item">قوانین و مقررات</tr>
        <tr className="table-item">سوالات پر‌تکرار</tr>
        <tr className="table-item">تماس با ما</tr>
      </table>
    </div>
  );
};

export default Footer;
