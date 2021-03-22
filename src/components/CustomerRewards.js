import React, { useState, useEffect } from 'react';
import { RewardsMain } from './RewardsMain';
import { RewardHistory } from './RewardHistory';
import { getRewardsData } from '../Utils/rewardUtils';


export const CustomerRewards = () => {
    const [customerPurchaseData, setCustomerReawarsBill] = useState([]);
    const calculateRewardPoints = (points) => {
        let totalpoints = 0;
        totalpoints = points >= 100 ? totalpoints + (points - 100) * 2 + 50 : totalpoints + (points - 50) * 1;
        return totalpoints;
    }
    useEffect(() => {
        const billReq = new Promise(resolve => resolve(getRewardsData()));
        billReq.then(res => {
            const billData = res.length > 0 ? res.map(trxn => {
                const selTranPoints = calculateRewardPoints(trxn.amount);
                return { ...trxn, ...{ rewards: selTranPoints } }
            }) : [];
            setCustomerReawarsBill(billData)
        })
    }, [])
    debugger
    return (
        <div>
            <RewardHistory customerPurchaseData={customerPurchaseData} />
            <RewardsMain customerPurchaseData={customerPurchaseData} />
        </div>
    )
}
