// ===== GỬI EMAIL BẰNG EMAILJS =====

// Khởi tạo EmailJS (chạy khi file được load)
(function() {
  emailjs.init("public-key"); // ⚙️ thay bằng public key thật
})();

// Bắt sự kiện submit form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_t093fdf';  // ⚙️ thay bằng ID thật
    const templateID = 'template_xnct093';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('✅ Gửi tin nhắn thành công! Cảm ơn bạn đã liên hệ.');
        this.reset();
      })
      .catch((error) => {
        console.error('❌ Lỗi khi gửi tin nhắn:', error);
        alert('❌ Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.');
      });
  });
});
