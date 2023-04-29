function showToastr(title, status = 0) {
    let icon = status == 1 ? `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 3.73 15.093"><g transform="translate(-184.227)"><path d="M186.092,12.011a1.112,1.112,0,0,0,1.107-1.018l.751-8.972a1.865,1.865,0,1,0-3.717,0l.751,8.972A1.112,1.112,0,0,0,186.092,12.011Z" transform="translate(0)" fill="#fff"/><path d="M206.664,410.908a1.211,1.211,0,1,0,1.211,1.211A1.21,1.21,0,0,0,206.664,410.908Z" transform="translate(-20.571 -398.236)" fill="#fff"/></g></svg>` : `<svg width="14" height="14" viewBox="0 0 12 12" fill="#333"><path d="M10.522 2.326L4.182 8.62 1.364 5.664a.828.828 0 00-1.169.087.824.824 0 00.095 1.162l3.465 3.52a.823.823 0 00.54.202l.082-.004a.829.829 0 00.573-.32l6.875-6.979a.824.824 0 10-1.304-1.006z" fill="#FFF" fill-rule="nonzero"></path></svg>`;
    let toastr = `<div class="toastr-box ${status == 1 ? "wrong" : ""}">
        <div data-testid="toastr-box-icon-container">
            <div fill="#333" name="check" width="14" height="14" radius="0" class="toastr-box-icon-container-icon" color="inherit">
                ${icon}
            </div>
        </div>
        <div class="toastr-box-text-container">
            <div class="toastr-box-text-container-text">
                <span>${title}</span>
            </div>
            <div class="toastr-box-text-container-close">
                <div fill="#fff" name="close" width="14" height="14" radius="0" class="toastr-box-text-container-close-icon" color="inherit">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M14.207 12.027l9.352-9.351c.609-.61.609-1.59 0-2.2a1.551 1.551 0 00-2.2 0l-9.351 9.352L2.656.477c-.61-.61-1.59-.61-2.199 0-.61.609-.61 1.59 0 2.199l9.352 9.351L.457 21.38c-.61.605-.61 1.59 0 2.2a1.553 1.553 0 002.2 0l9.35-9.352 9.352 9.351a1.553 1.553 0 002.2 0c.609-.61.609-1.594 0-2.2zm0 0"></path></svg>
                </div>
            </div>
        </div>
    </div>`;
  
    document.body.querySelector('.toastr-area').innerHTML += toastr;
  
    $('.toastr-box').click(function () {
      $(this).remove();
    })
  
    removePopup();
  
  }
  
  function removePopup() {
    setTimeout(function () { document.querySelector('.toastr-box').remove(); }, 5000);
  }