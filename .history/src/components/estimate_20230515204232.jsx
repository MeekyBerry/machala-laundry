// Estimate component
import React from "react";
import Layout from "../layout/nav";
import Footer from "../layout/footer";

const Estimate = () => {
  return (
    <section className="wrapper">
      <Layout />
      <section className="estimate">
        <div className="estimate--head">
          <header className="estimate--head__header">
            <h1 className="estimate--head__header__title">Machala Laundry Service price list</h1>
          </header>
        </div>
        <table className="estimate--table">
          <thead className="estimate--table__head">
            <tr className="estimate--table__head--row">
              <th className="estimate--table__head--row__item">Item</th>
              <th className="estimate--table__head--row__item">Laundry</th>
              <th className="estimate--table__head--row__item">Ironing Only</th>
              </tr>
          </thead>
          <tbody className="estimate--table__body">
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">Shirt</td>
              <td className="estimate--table__body--row__item">N300</td>
              <td className="estimate--table__body--row__item">N200</td>
        </table>
      </section>
      <Footer />
    </section>
  );
}

export default Estimate;