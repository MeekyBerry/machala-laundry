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
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">T-Shirt</td>
              <td className="estimate--table__body--row__item">N300</td>
              <td className="estimate--table__body--row__item">150</td>
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">P-Trousers</td>
              <td className="estimate--table__body--row__item">N300</td>
              <td className="estimate--table__body--row__item">N200</td>
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">Chinos</td>
              <td className="estimate--table__body--row__item">N300</td>
              <td className="estimate--table__body--row__item">N150</td>
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">Suit</td>
              <td className="estimate--table__body--row__item">N1000</td>
              <td className="estimate--table__body--row__item">N600</td>
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">Complete Suit</td>
              <td className="estimate--table__body--row__item">N1500</td>
              <td className="estimate--table__body--row__item">N700</td>
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">Jacket</td>
              <td className="estimate--table__body--row__item">N700</td>
              <td className="estimate--table__body--row__item">N300</td>
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">Buba & Wrapper</td>
              <td className="estimate--table__body--row__item">N1000</td>
              <td className="estimate--table__body--row__item">N600</td>
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">Suit</td>
              <td className="estimate--table__body--row__item">N1000</td>
              <td className="estimate--table__body--row__item">N600</td>
            </tr>
            <tr className="estimate--table__body--row">
              <td className="estimate--table__body--row__item">Suit</td>
              <td className="estimate--table__body--row__item">N1000</td>
              <td className="estimate--table__body--row__item">N600</td>
            </tr>
        </table>
      </section>
      <Footer />
    </section>
  );
}

export default Estimate;