const dayjs = require("dayjs");

module.exports = {
  "GET /"(req, res) {
    return "hello world";
  },
  "GET /rest/cities": require("./rest/cities.json"), //注意这里是使用/rest/cities来访问，不是/rest/cities.json，后者会报错
  "GET /rest"(req, res) {
    return res.json({
      status: 200,
      data: "hello heyzqt"
    });
  },
  "GET /rest/search"(req, res) {
    const { key } = req.query;
    return res.json({
      result: [
        {
          key: "芜湖",
          display: "芜湖"
        },
        {
          key: "井冈山",
          display: "井冈山"
        },
        {
          key: "铁岭",
          display: "铁岭"
        }
      ],
      searchKey: key
    });
  },

  "GET /rest/query"(req, res) {
    const response = require("./rest/query.json");
    response.dataMap.directTrainInfo.trains = response.dataMap.directTrainInfo.trains.reverse();
    return res.json(response);
  },

  "GET /rest/ticket"(req, res) {
    const { date } = req.query;

    return res.json({
      detail: {
        departTimeStr: "07:15",
        arriveTimeStr: "11:47",
        arriveDate: dayjs(date).valueOf(),
        durationStr: "4小时32分"
      },
      candidates: [
        {
          type: "二等座",
          priceMsg: "443.5",
          ticketsLeft: "有票",
          channels: [
            {
              name: "快速预订",
              desc: "含40元出行保障 快速出票 迅捷无忧"
            },
            {
              name: "普通预订",
              desc: "出票较慢，高峰期需要排队"
            }
          ]
        },
        {
          type: "一等座",
          priceMsg: "748.5",
          ticketsLeft: "有票",
          channels: [
            {
              name: "快速预订",
              desc: "含40元出行保障 快速出票 迅捷无忧"
            },
            {
              name: "普通预订",
              desc: "出票较慢，高峰期需要排队"
            }
          ]
        },
        {
          type: "商务座",
          priceMsg: "1403.5",
          ticketsLeft: "5张",
          channels: [
            {
              name: "快速预订",
              desc: "含40元出行保障 快速出票 迅捷无忧"
            },
            {
              name: "普通预订",
              desc: "出票较慢，高峰期需要排队"
            }
          ]
        }
      ]
    });
  }
};
