import React, { useState, useEffect } from "react";
import axios from "axios";
import formData from "./Form";
import payload from "./Form";

function ResultTable({ form }) {
  const [data, setData] = useState({
    Nett_Settlment_Local: 0,
    Profit_local: 0,
    Margin_on_sp_local: 0,
    margin_on_settlement_local: 0,
    item_selling_price_local: 0,
    Nett_Settlment_Regional: 0,
    Profit_regional: 0,
    Margin_on_sp_regional: 0,
    margin_on_settlement_regional: 0,
    item_selling_price_regional: 0,
    Nett_Settlment_National: 0,
    Profit_national: 0,
    Margin_on_sp_national: 0,
    margin_on_settlement_national: 0,
    item_selling_price_national: 0,
  });

  useEffect(() => {
    axios
      .get('https://marginanalyse.azurewebsites.net/api/marginv1')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formData]);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Nett Settlement</th>
          <th>Profit</th>
          <th>Margin on SP</th>
          <th>Margin on Settlement</th>
          <th>Item Selling Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Local</td>
          <td>{data.Nett_Settlment_Local}</td>
          <td>{data.Profit_local}</td>
          <td>{data.Margin_on_sp_local}</td>
          <td>{data.margin_on_settlement_local}</td>
          <td>{data.item_selling_price_local}</td>
        </tr>
        <tr>
          <td>Regional</td>
          <td>{data.Nett_Settlment_Regional}</td>
          <td>{data.Profit_regional}</td>
          <td>{data.Margin_on_sp_regional}</td>
          <td>{data.margin_on_settlement_regional}</td>
          <td>{data.item_selling_price_regional}</td>
        </tr>
        <tr>
          <td>National</td>
          <td>{data.Nett_Settlment_National}</td>
          <td>{data.Profit_national}</td>
          <td>{data.Margin_on_sp_national}</td>
          <td>{data.margin_on_settlement_national}</td>
          <td>{data.item_selling_price_national}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultTable;
