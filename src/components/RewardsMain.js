import React from 'react';

export const RewardsMain = ({ customerPurchaseData }) => {
    const calculateRewardPoints = (points) => {
        let totalpoints = 0;
        totalpoints = points >= 100 ? totalpoints + (points - 100) * 2 + 50 : totalpoints + (points - 50) * 1;
        return totalpoints;
    }
    const getTotalRewards = () => {
        const totalPoints = customerPurchaseData.reduce((total, ele) => {
            const selTranPoints = calculateRewardPoints(ele.amount);
            const totalPoints = selTranPoints + total;
            return totalPoints
        }, 0)
        return totalPoints
    }
    return (
        <div>
            <br></br>
            <p>Total rewards : {getTotalRewards()}</p>
        </div>
    )
}

