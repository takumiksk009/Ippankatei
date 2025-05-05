<<<<<<< HEAD
// 料金プランごとの設定
const plans = {
    1: { base: 1950, tiers: [{ limit: 20, rate: 730 }, { limit: Infinity, rate: 680 }] },
    3: { base: 1950, tiers: [{ limit: 10, rate: 600 }, { limit: Infinity, rate: 500 }] },
    4: { base: 1100, tiers: [{ limit: Infinity, rate: 400 }] },
    8: { base: 800, tiers: [{ limit: 1.4, rate: 0 }, { limit: Infinity, rate: 720 }] },
    9: { base: 1900, tiers: [{ limit: 5, rate: 610 }, { limit: Infinity, rate: 520 }] },
    10: { base: 1600, tiers: [{ limit: Infinity, rate: 530 }] }
};

// 料金計算を行う関数
function calculateBill(planNumber, usage, days) {
    const plan = plans[planNumber];
    if (!plan) return null;

    // 基本料金（日数分）→ 小数点含むのでそのまま使用
    const dailyBaseRate = plan.base / 30;
    const totalBaseRate = Math.ceil(dailyBaseRate * days);  // 切り上げで安定

    // 従量料金の計算（正確に掛け算）
    let consumptionRate = 0;
    let remainingUsage = usage;
    let previousLimit = 0;

    for (const tier of plan.tiers) {
        if (remainingUsage <= 0) break;

        const tierLimit = tier.limit;
        const tierRange = tierLimit - previousLimit;
        const tierUsage = Math.min(remainingUsage, tierRange);

        consumptionRate += tierUsage * tier.rate;

        remainingUsage -= tierUsage;
        previousLimit = tierLimit;
    }

    // 小計・消費税・合計（小計と合計は切り捨て）
    const subtotal = totalBaseRate + consumptionRate;
    const tax = Math.floor(subtotal * 0.1);
    const total = Math.floor(subtotal + tax);

    return {
        baseRate: totalBaseRate,                     // 基本料金（切り上げ）
        consumptionRate: Math.round(consumptionRate),// 従量料金（正確な掛け算）
        subtotal: Math.floor(subtotal),              // 小計（切り捨て）
        tax: tax,
        total: total
    };
}

// 計算を実行する関数
function performCalculation() {
    const planNumber = parseInt(document.getElementById('plan').value);
    const usage = parseFloat(document.getElementById('usage').value);
    const days = parseInt(document.getElementById('days').value);

    if (!plans[planNumber] || isNaN(usage) || usage < 0 || isNaN(days) || days <= 0) {
        alert("有効なプラン、使用量、使用日数を入力してください。");
        return;
    }

    const result = calculateBill(planNumber, usage, days);

    document.getElementById('baseRate').textContent = `基本料金 = ¥${result.baseRate}`;
    document.getElementById('consumptionRate').textContent = `従量料金 = ¥${result.consumptionRate}`;
    document.getElementById('subtotal').textContent = `小計 = ¥${result.subtotal}`;
    document.getElementById('tax').textContent = `消費税 = ¥${result.tax}`;
    document.getElementById('total').textContent = `合計 = ¥${result.total}`;
=======
// 料金プランごとの設定
const plans = {
    1: { base: 1950, tiers: [{ limit: 20, rate: 730 }, { limit: Infinity, rate: 680 }] },
    3: { base: 1950, tiers: [{ limit: 10, rate: 600 }, { limit: Infinity, rate: 500 }] },
    4: { base: 1100, tiers: [{ limit: Infinity, rate: 400 }] },
    8: { base: 800, tiers: [{ limit: 1.4, rate: 0 }, { limit: Infinity, rate: 720 }] },
    9: { base: 1900, tiers: [{ limit: 5, rate: 610 }, { limit: Infinity, rate: 520 }] },
    10: { base: 1600, tiers: [{ limit: Infinity, rate: 530 }] }
};

// 料金計算を行う関数
function calculateBill(planNumber, usage, days) {
    const plan = plans[planNumber];
    if (!plan) return null;

    // 基本料金（日数分）→ 小数点含むのでそのまま使用
    const dailyBaseRate = plan.base / 30;
    const totalBaseRate = Math.ceil(dailyBaseRate * days);  // 切り上げで安定

    // 従量料金の計算（正確に掛け算）
    let consumptionRate = 0;
    let remainingUsage = usage;
    let previousLimit = 0;

    for (const tier of plan.tiers) {
        if (remainingUsage <= 0) break;

        const tierLimit = tier.limit;
        const tierRange = tierLimit - previousLimit;
        const tierUsage = Math.min(remainingUsage, tierRange);

        consumptionRate += tierUsage * tier.rate;

        remainingUsage -= tierUsage;
        previousLimit = tierLimit;
    }

    // 小計・消費税・合計（小計と合計は切り捨て）
    const subtotal = totalBaseRate + consumptionRate;
    const tax = Math.floor(subtotal * 0.1);
    const total = Math.floor(subtotal + tax);

    return {
        baseRate: totalBaseRate,                     // 基本料金（切り上げ）
        consumptionRate: Math.round(consumptionRate),// 従量料金（正確な掛け算）
        subtotal: Math.floor(subtotal),              // 小計（切り捨て）
        tax: tax,
        total: total
    };
}

// 計算を実行する関数
function performCalculation() {
    const planNumber = parseInt(document.getElementById('plan').value);
    const usage = parseFloat(document.getElementById('usage').value);
    const days = parseInt(document.getElementById('days').value);

    if (!plans[planNumber] || isNaN(usage) || usage < 0 || isNaN(days) || days <= 0) {
        alert("有効なプラン、使用量、使用日数を入力してください。");
        return;
    }

    const result = calculateBill(planNumber, usage, days);

    document.getElementById('baseRate').textContent = `基本料金 = ¥${result.baseRate}`;
    document.getElementById('consumptionRate').textContent = `従量料金 = ¥${result.consumptionRate}`;
    document.getElementById('subtotal').textContent = `小計 = ¥${result.subtotal}`;
    document.getElementById('tax').textContent = `消費税 = ¥${result.tax}`;
    document.getElementById('total').textContent = `合計 = ¥${result.total}`;
>>>>>>> 56539ddb418bdcd9302ef8ab79d2585f6bb408d0
}