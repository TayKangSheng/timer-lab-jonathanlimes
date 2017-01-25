function timer () {
  var resetButton = document.querySelector('#reset')
  var startButton = document.querySelector('#start')
  var pauseButton = document.querySelector('#pause')

  var seconds = 0
  var timerId = document.querySelector('#timer')

  var pressReset = resetButton.addEventListener('click', resetTime)
  var pressStart = startButton.addEventListener('click', startTime)
  var pressPause = pauseButton.addEventListener('click', pauseTime)

  function startTime () {
    timerId.innerHTML = 'Time elapsed: ' + seconds
    timerNum = setInterval(updateTime, 1000)
  }
  function pauseTime () {
    clearInterval(timerNum)
    timerId.innerHTML = 'Time elapsed: ' + seconds
  }
  function resetTime () {
    clearInterval(timerNum)
    seconds = 0
    timerId.innerHTML = 'Stop Watch'
  }
  function updateTime () {
    seconds++
    timerId.innerHTML = 'Time elapsed: ' + seconds
  }

  return {
    updateTime: updateTime,
    startTime: startTime,
    pauseTime: pauseTime,
    resetTime: resetTime
  }
}

// Insert DOM Loaded function to call the function
window.addEventListener('DOMContentLoaded', function () {
  timer()
})
