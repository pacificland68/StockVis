self.onmessage = function (event) {
  var messageData = JSON.parse(event.data)
  var message = messageData.message

  var processedData = processData(message) // 处理数据的函数，根据实际情况修改

  self.postMessage(processedData)
}

function processData(message) {
  // 进行数据处理，根据实际情况修改
  return message
}
