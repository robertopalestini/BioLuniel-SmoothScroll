	
const ipAPI = '//api.ipify.org?format=json'

const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: ipAddress } = await Swal.fire({
  title: 'Enter your IP address',
  input: 'text',
  inputLabel: 'Your IP address',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
  }
})

if (ipAddress) {
  Swal.fire(`Your IP address is ${ipAddress}`)
}