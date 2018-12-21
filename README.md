## OVERVIEW

##### Sinh viên thực hiện đồ án theo nhóm

##### Yêu cầu commit lên GITHUB đầy đủ

##### Thời gian thực hiện: 20 ngày

##### Yêu cầu: xây dựng ứng dụng web Internet Banking.

## TECHNIQUES

##### SPA (Frontend)
*- vuejs / reactjs*

*- vue-router / react-router*

*- 0vuex / redux*



## 1: SPA INTERNET BANKING

### SPA Internet Banking có các chức năng sau

##### 1. Đăng nhập, có sử dụng Google Recaptcha

##### 2. Thể hiện danh sách tài-khoản-thanh-toán của người dùng
-*Mỗi tài-khoản-thanh-toán chỉ thể hiện số-tài-khoản & số-dư-hiện-tại*
##### 3. Chuyển khoản nội bộ (cùng ngân hàng)
-*Chọn tài-khoản-thanh-toán nguồn*

-*Điền thông tin người nhận (điền số tài khoản, hệ thống tự động truy vấn các thông tin còn lại (không truy vấn số dư) của người nhận)*

-*Nhập số tiền chuyển & nội dung chuyển*

-*Chọn hình thức thanh toán phí (người nhận trả phí / người gửi trả phí)*

-*Ra lệnh CHUYỂN TIỀN*

-*Yêu cầu người gửi nhập OTP xác nhận giao dịch (người gửi nhận OTP qua email sau khi ra lệnh CHUYỂN TIỀN *bước e*)*

##### 4. Thiết lập danh sách người nhận

-*Thông tin gồm { số tài khoản, tên gợi nhớ }. Trong trường hợp người dùng không nhập tên-gợi-nhớ, hệ thống sử dụng tên-đăng-ký của tài khoản người nhận làm tên-gợi-nhớ*

##### 5. Xem lịch sử giao dịch của 1 tài khoản

##### 6. Đóng 1 tài-khoản-thanh-toán

-*Hệ thống yêu cầu người dùng duy trì ít nhất 1 tài-khoản-thanh-toán*

-*Nếu tài-khoản-thanh-toán còn số dư khả dụng, hệ thống yêu cầu người dùng chuyển toàn bộ số dư sang 1 tài-khoản-thanh-toán khác trước khi đóng*

## Chức năng dành riêng cho nhân viên

##### Tạo tài khoản người dùng

-*Thông tin đăng nhập*

-*Thông tin cá nhân (họ tên, email, phone)*

##### Tạo tài-khoản-thanh-toán cho người dùng, mỗi tài khoản người dùng có thể có nhiều tài-khoản-thanh-toán*

##### Nạp tiền vào 1 tài-khoản-thanh-toán bất kỳ
