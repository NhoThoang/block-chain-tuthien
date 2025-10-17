# 🪙 Stable VND Charity Coin (VNDCoin)
**Phiên bản:** 0.1 (Draft) — 2025  
**Tagline:** *"Minh bạch – Truy xuất – Nhân văn"*

---

## 1️⃣ Tổng quan

**VNDCoin** là một dự án *Stable Charity Token* giúp **minh bạch hóa quyên góp từ thiện** thông qua công nghệ **blockchain**.  
Mỗi **1 VNDCoin = 1 VNĐ thật**, đảm bảo **giá trị ổn định và truy xuất nguồn gốc minh bạch**.

> ✅ Mọi giao dịch đều công khai, không thể chỉnh sửa, có thể kiểm chứng bởi cộng đồng.

---

## 2️⃣ Mục tiêu

- Xây dựng **nền tảng quyên góp minh bạch** và **đáng tin cậy**.  
- Cho phép **người quyên góp ẩn danh có xác thực**.  
- Ghi nhận và **tôn vinh hành động thiện nguyện**.  
- Hạn chế tối đa **gian lận, rửa tiền** hoặc **thao túng số liệu**.

---

## 3️⃣ Kiến trúc hệ thống

| Thành phần | Mô tả |
| ----------- | ----- |
| **Frontend (Web/App)** | Giao diện người dùng (donor, admin), hiển thị bản đồ từ thiện, ví, thống kê. |
| **Backend (API Gateway)** | Xử lý KYC, giao dịch, kết nối database và blockchain. |
| **Smart Contract (VNDCoin)** | Token chuẩn **ERC-20 mở rộng**, hỗ trợ *mint, burn, trace, audit*. |
| **Off-chain Database** | Lưu metadata, log, báo cáo và dữ liệu ẩn danh. |
| **AI Anti-Fraud Engine** | Phân tích hành vi bất thường, phát hiện gian lận. |
| **Blockchain Explorer** | Cộng đồng có thể theo dõi mọi dòng tiền công khai. |

---

## 4️⃣ Cơ chế hoạt động

### 🔹 4.1. Phát hành (Minting)
- Người dùng chuyển VNĐ thật vào quỹ.  
- Hệ thống **mint** số coin tương ứng, có **chữ ký số + ID người phát hành**.

### 🔹 4.2. Quyên góp (Transfer)
- Người dùng gửi coin cho **chiến dịch / quỹ từ thiện**.  
- Giao dịch hiển thị **real-time trên Charity Explorer**.

### 🔹 4.3. Giải ngân (Burning)
- Khi quỹ sử dụng tiền thật → **burn** coin tương ứng.  
- Giao dịch kèm **bằng chứng (invoice, ảnh, xác nhận)**.

### 🔹 4.4. Ẩn danh có xác thực (Selective Anonymity)
- Blockchain chỉ lưu **hash danh tính**.  
- Hệ thống hiển thị **rank thiện nguyện ẩn danh** trên bản đồ tổng thể.

---

## 5️⃣ Công nghệ & Bảo mật

| Lớp | Công nghệ chính | Mô tả |
| ---- | ---------------- | ----- |
| **Blockchain Layer** | Ethereum / Polygon L2 | Smart contract ERC-20 mở rộng: mint, burn, freeze, trace. |
| **Smart Contract** | Solidity 0.8.x | Mã nguồn mở, kiểm toán độc lập (audit). |
| **Data Layer** | PostgreSQL + IPFS | Lưu metadata & minh chứng (ảnh, báo cáo). |
| **AI Security** | Python + ML | Phát hiện bất thường trong giao dịch. |
| **Identity Layer** | e-KYC + Signature + Hash256 | Xác thực danh tính người phát hành. |
| **Encryption Layer** | AES-256 + SSL/TLS 1.3 | Mã hóa dữ liệu nhạy cảm. |

---

## 6️⃣ Cơ chế bảo vệ & khôi phục

- **Anti-Hack Mode:** Tự động tạm dừng contract khi có hoạt động mint bất thường.  
- **Audit Trail:** Ghi lại toàn bộ sự kiện (timestamp, hash, chữ ký số, IP).  
- **Coin Revoke System:** Cho phép thu hồi coin bị mint trái phép.  
- **Incident Trace Map:** Xác định nguồn gốc & thời điểm tấn công.

---

## 7️⃣ Tokenomics

| Thông tin | Mô tả |
| ---------- | ----- |
| **Tên token** | VNDCoin |
| **Tỷ lệ** | 1 VNDCoin = 1 VNĐ thật |
| **Nguồn phát hành** | Người dùng / tổ chức được xác thực |
| **Cơ chế tạo coin** | Mint khi nạp tiền, burn khi chi tiêu |
| **Tổng cung** | Co giãn (tỷ lệ 1:1 với quỹ VNĐ thật) |
| **Lưu ký** | Ví lạnh (cold wallet) thuộc quỹ trung gian |

---

## 8️⃣ Tuân thủ pháp lý

- VNDCoin **không phát hành tiền riêng**, chỉ là **chứng chỉ số** đại diện giá trị VNĐ.  
- Quỹ đảm bảo tỷ lệ **1:1 trong tài khoản ký quỹ (custodial wallet)**.  
- Tuân thủ:
  - **Nghị định 80/2016/NĐ-CP** về thanh toán không dùng tiền mặt.  
  - **Luật Giao dịch điện tử sửa đổi 2023**.  
- Tích hợp **RegTech** để đảm bảo báo cáo & kiểm toán minh bạch.

---

## 9️⃣ Lộ trình phát triển

| Giai đoạn | Mục tiêu | Thời gian |
| ---------- | -------- | --------- |
| **Phase 1** | Thiết kế smart contract & ví testnet | Q4/2025 |
| **Phase 2** | Dashboard & bản đồ thiện nguyện | Q1/2026 |
| **Phase 3** | Audit & hợp tác với tổ chức thực tế | Q2/2026 |
| **Phase 4** | Open source & công bố audit report | Q3/2026 |

---

## 🔚 Tầm nhìn dài hạn

> *“Blockchain không chỉ dành cho tài chính, mà còn cho lòng tin.”*

VNDCoin hướng tới:
- Xây dựng **văn hóa quyên góp minh bạch**.  
- Giúp **quỹ từ thiện giảm gian lận, tự động báo cáo**.  
- Đem lại **niềm tin và minh chứng thực tế** cho từng đóng góp.

---

## 📎 Liên hệ & Tham gia

📧 **Email:** contact@vndcoin.org *(sẽ kích hoạt khi ra mắt bản alpha)*  
🌐 **Website & Explorer:** *coming soon*  
🔗 **GitHub:** *private repo until audit complete*

---

### ❤️ Đóng góp
Mọi ý tưởng đóng góp về kiến trúc, audit, UX, AI fraud detection đều được chào đón.  
Hãy cùng nhau **xây dựng niềm tin số hóa cho cộng đồng từ thiện Việt Nam.**

---

© 2025 VNDCoin Charity Project — *Open for Good.*
