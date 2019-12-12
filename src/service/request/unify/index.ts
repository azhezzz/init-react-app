/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import _ from 'lodash';
import { GameTypeEnum } from '../../../utils/constants';

interface UnifyFields {
  [key: string]: {
    dataKeys?: string | string[];
    formatter?: (value: any, data: any, keys?: string | string[]) => any;
  };
}
function getValue(data: any, dataKeys: undefined | string | string[], index: string) {
  if (_.isArray(dataKeys)) {
    return _.pick(data, dataKeys);
  }
  if (_.isString(dataKeys)) {
    return _.get(data, dataKeys);
  }
  if (_.isEmpty(dataKeys)) {
    return _.get(data, index);
  }
}

function formatTheFields(data: any, unifyFields: UnifyFields) {
  const temp = {};
  _.forEach(unifyFields, (value, index) => {
    let newData;
    if (value.formatter) {
      newData = value.formatter(getValue(data, value.dataKeys, index), data, value.dataKeys);
    } else {
      newData = getValue(data, value.dataKeys, index);
    }
    _.set(temp, index, newData);
  });
  return temp;
}
// 根据不同的游戏类型进行不同的请求
function requestByGameType(gameType: GameTypeEnum, apiList: any = {}) {
  // 初始化 api param，格式化函数
  const api = _.get(apiList, `${gameType}.api`, null);
  const params = _.get(apiList, `${gameType}.params`, null);
  if (!api) return Promise.resolve();
  const forceOriginalData = _.get(apiList, `${gameType}.forceOriginalData`, null);
  const unifyfield = _.get(apiList, `unifyfield.${gameType}`, null);
  const newUnifyfield = _.get(apiList, `newUnifyfield.${gameType}.fields`, null);
  // 请求并格式化
  return api(params).then((data: any) => {
    if (!unifyfield && !newUnifyfield) return data;
    let newDataAfterFormatter: any;
    if (newUnifyfield) {
      // 判断data是对象还是数组
      if (forceOriginalData) {
        // 强制传入原始data
        newDataAfterFormatter = formatTheFields(data, newUnifyfield);
      } else if (_.isArray(data)) {
        // 如果是数组
        newDataAfterFormatter = _.map(data, item => formatTheFields(item, newUnifyfield));
      } else if (_.isObject(data)) {
        // 如果是对象
        newDataAfterFormatter = formatTheFields(data, newUnifyfield);
      }
    }
    if (_.get(apiList, `log`, null)) {
      console.log('%c oldData ', 'color: white; background-color: #8c94de', data);
      console.log('%c newData ', 'color: white; background-color: #95B46A', newDataAfterFormatter);
    }
    return newDataAfterFormatter;
  });
}

export default requestByGameType;
