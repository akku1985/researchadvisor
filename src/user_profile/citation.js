import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    dodgePadding: 2,
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Column {...config} />;
};
  
function _citation() {
    return (
        <div className="col-xl-6 col-lg-12 col-md-12 citation">
      <h3>Citation</h3>
      <DemoColumn />
    </div>
    )
}

export default _citation
