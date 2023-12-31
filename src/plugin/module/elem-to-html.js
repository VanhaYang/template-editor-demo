/**
 * @description elem to html
 * @author wenhao.yang
 */

// 生成 html 的函数
// eslint-disable-next-line no-unused-vars
function mentionToHtml(elem, childrenHtml) {
  const { value = '', info = {}, list = [] } = elem
  const infoStr = encodeURIComponent(JSON.stringify(info))
  const listStr = encodeURIComponent(JSON.stringify(list))
  return `<span data-w-e-type="mention" data-w-e-is-void data-w-e-is-inline data-value="${value}" data-info="${infoStr}" data-list="${listStr}">@${value}</span>`
}

// 配置
const conf = {
  type: 'mention', // 节点 type ，重要！！！
  elemToHtml: mentionToHtml
}

export default conf
