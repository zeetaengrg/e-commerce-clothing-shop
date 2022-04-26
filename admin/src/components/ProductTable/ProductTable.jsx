import "./ProductTable.scss";

const ProductTable = () => {
  const rows = [
    {
      id: 1143155,
      title: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "2 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      title: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "15 Febraury",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      title: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Gurung",
      date: "6 April",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      title: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "12 January",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      title: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "8 December",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342356,
      title: "Samsung Galaxy S10",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "5 October",
      amount: 1200,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];

  return (
    <div className="table">
      <header className="table__title">
        <h1>Latest Transactions</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td className="row-img">
                <img src={row.img} alt={row.title} />
                <span>{row.title}</span>
              </td>
              <td>{row.customer}</td>
              <td>{row.date}</td>
              <td>{row.amount}</td>
              <td>{row.method}</td>
              <td className={`status ${row.status}`}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
