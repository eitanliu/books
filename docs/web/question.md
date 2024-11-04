# Question

## 地址变化
[onbeforeunload](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)  
[onpopstate](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)  
[onhashchange](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)  
[pushState](https://developer.mozilla.org/docs/Web/API/History/pushState)  
[replaceState](https://developer.mozilla.org/docs/Web/API/History/replaceState)  

## 判断数据类型的方法

[typeof](https://github.com/liubin915249126/javascript/blob/master/interview/ES5/typeof.md)

## 执行字符串代码

[@typescript-eslint/no-implied-eval](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide_no-implied-eval-V5)


## 监听网络请求
[VConsole源码分析与思考の初始化](https://juejin.cn/post/6844904133363761159)  
[vConsole fetch.proxy.ts](https://github.com/Tencent/vConsole/blob/dev/src/network/fetch.proxy.ts)  
[vConsole xhr.proxy.ts](https://github.com/Tencent/vConsole/blob/dev/src/network/xhr.proxy.ts)  

```javascript
/**
 * @param {string} fullPath
 * @returns {boolean}
 */
function existsFullPathProperty(fullPath) {
  const parts = fullPath.split('.');
  const objName = parts.shift();
  let obj; try { obj = eval(objName); } catch (e) {
    if (e instanceof ReferenceError) return false; else throw e;
  }
  if (typeof obj === 'undefined' || obj === null) return false;
  return existsObjectPartsProperty(obj, parts);
}

/**
 * @param {string} objName
 * @param {string} path
 * @returns {boolean}
 */
function existsNamePathProperty(objName, path) {
  let obj; try { obj = eval(objName); } catch (e) {
    if (e instanceof ReferenceError) return false; else throw e;
  }
  if (typeof obj === 'undefined' || obj === null) return false;
  const parts = path.split('.');
  return existsObjectPartsProperty(obj, parts)
}

/**
 * @param {string} objName
 * @param {string} path
 * @returns {boolean}
 */
function existsObjectPathProperty(obj, path) {
  if (typeof obj === 'undefined' || obj === null) return false;
  const parts = path.split('.');
  return existsObjectPartsProperty(obj, parts)
}

/**
 * @param {any} obj
 * @param {string[]} parts
 * @returns {boolean}
 */
function existsObjectPartsProperty(obj, parts) {
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    if (typeof current[parts[i]] === 'undefined') return false;
    current = current[parts[i]];
  }
  return true;
}
```

