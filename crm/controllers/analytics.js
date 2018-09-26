const moment = require('moment');
const order = require('../models/Order');
const errorHandler = require('../utils/errorHandler');

module.exports.overview = async function(req, res) {
  try {
    const allOrders = await order.find({user: req.user.id}).sort({date: 1});
    const ordersMap = getOrdersMap(allOrders);
    const yesterdayOrders = ordersMap[moment().add(-1, 'd').format('DD.MM.YYYY')] || [];


    // Orders have yesterday
    const yesterdayOrdersNumber = yesterdayOrders.length
    //Total orders
    const totalOrdersNumber = allOrders.length;
    //Total days
    const daysNumber = Object.keys(ordersMap).length;
    // Orders per day
    const ordersPerDay = (totalOrdersNumber / daysNumber).toFixed(0);
    //Percent orders number
    const ordersPercent = (((yesterdayOrdersNumber / ordersPerDay) - 1) * 100).toFixed(2);
    //Total take
    const totalTake = calculatePrice(allOrders);
    //Take per day
    const takePerDay = totalTake / daysNumber;
    //Yesterday take
    const yesterdayTake = calculatePrice(yesterdayOrders);
    // Take percent
    const takePercent = ((yesterdayTake / takePerDay - 1) * 100).toFixed(2);
    // Take compare
    const compareTake = (yesterdayTake - takePerDay).toFixed(2);
    // Orders number compare
    const compareNumber = (yesterdayOrdersNumber - ordersPerDay).toFixed(2);

    res
      .status(200)
      .json({
        take: {
          percent: Math.abs(+takePercent),
          compare: Math.abs(+compareTake),
          yesterday: +yesterdayTake,
          isHigher: +takePercent > 0
        },
        orders: {
          percent: Math.abs(+ordersPercent),
          compare: Math.abs(+compareNumber),
          yesterday: +yesterdayOrdersNumber,
          isHigher: +ordersPercent > 0
        }
      });

  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.analytics = async function (req, res) {
  try {
    const allOrders = await order.find({user: req.user.id}).sort({date: 1});
    const ordersMap = getOrdersMap(allOrders);
    const average = +(calculatePrice(allOrders) / Object.keys(ordersMap).length).toFixed(2);
    const chart= Object.keys(ordersMap).map(label => {
      // label == 05.05.2018
      const take = calculatePrice(ordersMap[label]);
      const order = ordersMap[label].length;

      return {
        label, order, take
      }
    })

    res.status(200).json({
      average, chart
    })
  } catch (error) {
    errorHandler(res, error);
  }
}

function getOrdersMap(orders = []) {
  const daysOrders = {};
  orders.forEach(order => {
    const date = moment(order.date).format('DD.MM.YYYY');

    if (date === moment().format('DD.MM.YYYY')) {
      return
    }

    if (!daysOrders[date]) {
      daysOrders[date] = []
    }

    daysOrders[date].push(order)
  })

  return daysOrders;
}

function calculatePrice(orders = []) {
  return orders.reduce((total, order) => {
    const orderPrice = order.list.reduce((orderTotal, item) => {
      return orderTotal += item.cost * item.quantity;
    }, 0)
    return total += orderPrice;
  }, 0)
}