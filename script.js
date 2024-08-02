function validateInput() {
  let inputTag = document.getElementById('inputField')
  const invalidText = document.querySelector('.errormessage')
  let inputValue = inputTag.value.trim()

  if (inputValue === '') {
    invalidText.style.visibility = 'visible'
    inputTag.classList.add('shake')

    setTimeout(() => {
      invalidText.style.visibility = 'hidden'
      inputTag.classList.remove('shake')
    }, 500)
  } else {
    alert('You entered complete text')
  }
}
