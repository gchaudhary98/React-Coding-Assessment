import React from 'react';

export const RewardHistory = ({ customerPurchaseData }) => (
    <div className="purchase-table">
        {
            customerPurchaseData.length > 0 &&
            <table>
                <thead>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Total rewards</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerPurchaseData.map((item, idx) =>
                            (
                                <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.date}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.rewards}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        }
    </div>
);
