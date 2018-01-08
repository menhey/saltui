/**
 * DatetimeField Component Demo for tingle
 * @author caoke.ck
 *
 * Copyright 2014-2017, Tingle Team.
 * All rights reserved.
 */
import React from 'react';

import Group from 'salt-group';
import DatetimeField from 'salt-datetime-field';

// build之后, 测试一下下面一行, 把上面一行注释掉
// const DatetimeField = require('../../dist');

class Demo extends React.Component {
  constructor(props) {
    super(props);

    const t = this;
    const now = new Date().getTime();// 1500353913176

    t.state = {
      value1: '',
      value2: {
        value: '***',
        timeType: 'PM',
      },
      value3: '2017-7-20 12:42:44', // '2017-7-20 12:42:44',
    };
  }

  handleChange(field, value) {
    this.setState({
      [field]: value,
    });
  }

  render() {
    const t = this;
    /* eslint  react/jsx-filename-extension:0 */
    return (
      <div>
        <Group>
          <Group.Head className="t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18">时间选择器演示</Group.Head>
          <Group.List>
            <DatetimeField
              label="日期选择"
              disabledDate={() => [
                {
                  start: new Date(2023, 10, 1), // 2023- 11 - 1
                },
                {
                  start: new Date(2017, 0, 1),
                  end: new Date(2017, 4, 31),
                },
                {
                  start: new Date(2017, 5, 1),
                  end: new Date(2017, 6, 31),
                },
                {
                  start: new Date(2017, 7, 2),
                  end: new Date(2017, 7, 30),
                },
                {
                  start: new Date(2018, 7, 3),
                  end: new Date(2018, 7, 20),
                },
                new Date(2013, 11, 1),
              ]}
              onSelect={t.handleChange.bind(t, 'value1')}
              value={t.state.value1}
              columns={DatetimeField.YMD}
              tip="这里是提示信息"
            />
            <DatetimeField
              label="日期/上下午选择"
              onSelect={t.handleChange.bind(t, 'value2')}
              value={t.state.value2}
              columns={DatetimeField.YMDT}
            />
            <DatetimeField
              label="时间选择"
              onSelect={t.handleChange.bind(t, 'value3')}
              value={t.state.value3}
              columns={DatetimeField.YMDWHM}
            />
          </Group.List>
        </Group>
      </div>
    );
  }
}

export default Demo;
