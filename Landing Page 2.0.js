  const scriptURL = 'https://script.google.com/macros/s/AKfycbx5weSPlxelnW180vnUe1wMRwx1qAHd8Bok_xWfF1gYj1cJsVjV8AZaGxDUTzE2WsIj/exec'
  const form = document.forms['Fazone-Contacts-Form']
  const btnSend = document.querySelector('.btn-send')
  const btnLoading = document.querySelector('.btn-loading')
  const alert = document.querySelector('.alert-success')

  form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Jika Btn Send 'click'
    // btn send hide & btn loading show
    loading.classList.toggle('d-none')
    btnSend.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      
      // Jika respon Success maka
      // Console log Success & btn kembali ke awal
      // Serta alert akan tampil
      btnSend.classList.toggle('d-none')
      btnLoading.classList.toggle('d-none')
      
      alert.classList.toggle('d-none')
      console.log('Success!', response)
      
      form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
