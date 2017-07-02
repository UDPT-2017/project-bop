# Project - *Auction website*

**Auction website** là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1412689** - Hoàng Thị Bích Vân - 1412689 - hoangthibichvan95@gmail.com - 50%
* [x] **1412624** - Nguyễn Quốc Anh Tú - nqatu - ngqanhtu@outlook.com - 50%


URL: **http://project-auction.azurewebsites.net**
Báo cáo: **https://udpt-2017.github.io/project-bop/**

## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Làm việc nhóm:
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [ ] Sử dụng GIT theo Feature Branch Workflow.
* [x] Sử dụng GIT theo Gitflow Workflow.

## Mô tả nghiệp vụ chung ứng dụng
Phần mô tả đặt vào đây

## Lập trình server
### MVC
* [x] MVC (1412689)
* [x] Config (1412689)
* [x] REST routing (1412689)
* [x] Layout & partial (1412689)

### Lập trình dữ liệu
* [x] Thêm (1412624)
* [x] Xóa (1412624)
* [x] Sửa (1412624)
* [x] Tìm kiếm (1412624)

### Xử lý lỗi
* [x] Xử lý lỗi trong cùng trang web (1412689)
* [x] Xử lý lỗi dùng trang web riêng (1412689)
   * [x] 401 (1412689)
   * [x] 404 (1412689)
   * [x] 500 (1412689)

### Tương tác API khác
Liệt kê các API nhóm đã sử dụng được ở đây
* [x] Facebook API: mô tả (1412689)
* [x] Google API: mô tả (1412689)
* [x] ...

## Lập trình client
* [x] Kiểm tra dữ liệu (1412624)
* [x] Animation (1412624)
* [x] Thao tác DOM (1412624)
* [] AJAX (1412624)

## Bảo mật
* [x] Chứng thực (MSSV1)
* [x] Phân quyền sử dụng một số trang web với nhiều vai trò khác nhau (1412624)
   * [x] Không cho phép thao tác vào trang web khi không có quyền (1412624)
   * [x] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau (1412624)
   * [x] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (1412624)


## Các tài khoản để test hệ thống
### Admin
* Email: admin@yopmail.com
* Password: 123456
### Người dùng chưa được bán
* Email: lmtu@yopmail.com
* Password: 123456
### Người dùng có thể bán
* Email: havinh@yopmail.com
* Password: 123456
### Người dùng chưa được bid do không đủ like
* Email: httvan@gmail.com
* Password: 123456


# 1. Phân hệ người dùng anonymous (1412624)
## Trang chủ (1412624)
- Top 4 sản phẩm có nhiều lượt ra giá nhất (sắp xếp theo số lượt giảm dần) (1412624)
- Top 4 sản phẩm chưa kết thúc có giá cao nhất (1412624)
- Top 4 sản phẩm gần kết thúc(sắp xếp theo thời gian kết thúc giảm dần) (1412624)
## Hệ thống Menu
- Hiển thị danh sách loại sản phẩm (1412624)
## Tìm kiếm sản phẩm
- Cho phép tìm kiếm theo nhiều tiêu chí: tên, loại, ... (Chưa hoàn thành)
- Hỗ trợ phân trang truyền thống (1412624)
- Hỗ trợ sắp xếp lại kết quả tìm kiếm (thời gian kết thúc giảm, giá tăng, ...) (1412624)
- Những sản phẩm mới đăng trong N phút có thể hiện khác (1412624)
- Đầy đủ thông tin: tên, hình ảnh, giá hiện tại, người giữ giá (có mã hoá, vd nndkhoa sẽ được thể hiện dạng n\*d\*h\*a\*), thời gian còn lại, số lượt ra giá hiện có (1412624)
## Xem chi tiết sản phẩm 
- Hiển thị nhiều ảnh (tối thiểu là 3 ảnh) 
- Ảnh sản phẩm thể hiện dạng slideshow, có hiệu ứng chuyển ảnh 
- Mô tả sản phẩm có định dạng (dùng HTML) 
- Đầy đủ thông tin: tên, giá hiện tại, giá mua ngay (nếu có), người bán & điểm đánh giá (url), người đang giữ giá cao nhất & điểm đánh giá (url), thời điểm đăng, thời điểm kết thúc 
- Người bán thấy username & link chi tiết đánh giá CÁC NGƯỜI ĐẤU GIÁ 
- Người đấu giá thấy được username & link chi tiết đánh giá NGƯỜI BÁN 
## Đăng nhập 
## Đăng ký 
- Có sử dụng captcha
- Có mã hoá mật khẩu
- Có kiểm tra email không trùng
# 2. Phân hệ người dùng đã đăng nhập đấu giá
## Lưu 1 sản phẩm vào danh sách yêu thích (Watch List) (Chưa hoàn thành)
- View tìm sản phẩm (Chưa hoàn thành)
- View xem chi tiết sản phẩm (Chưa hoàn thành)
## Ra giá 1 sản phẩm ở view xem chi tiết sản phẩm (1412624)
- View xem chi tiết sản phẩm (1412624)
- Có kiểm tra điểm đánh giá lớn hơn 80% mới cho ra giá (1412624)
- Có đề nghị giá hợp lệ nhỏ nhất (giá hiện tại + bước giá) (1412624)
- Có xác nhận trước khi đặt giá (Chưa hoàn thành)
## Xem lịch sử đấu giá của sản phẩm 
## Quản lý hồ sơ cá nhân
- Đổi thông tin cá nhân, mật khẩu (1412624)
- Xem chi tiết đánh giá và % điểm của bản thân (1412624)
## Xem danh sách sản phẩm yêu thích (watch list) (1412624)
- Cho phép mở nhanh 1 sản phẩm từ danh sách (1412624)
## Xem danh sách sản phẩm đang tham gia đấu giá (bidding list) (1412624)
- Cho phép mở nhanh 1 sản phẩm từ danh sách (1412624)
- Sản phẩm bản thân đang đang giữ giá có thể hiện khác với sản phẩm người khác giữ giá (1412624)
## Xem danh sách sản phẩm bản thân đã thắng (won list) (1412624)
- Cho phép mở nhanh 1 sản phẩm từ danh sách (1412624)
## Đánh giá người bán (1412624)
## Xin nâng cấp thành tài khoản người bán (1412624)
# 3. Phân hệ quản trị (Admin) (1412624)
- Duyệt yêu cầu xin được nâng cấp tài khoản thành tài khoản bán (1412624)
- Quản lý sản phẩm, loại sản phẩm, nhà sản xuất (1412624)
- Quản lý danh sách người dùng (1412624)
- Xoá người dùng (1412624)
- Reset mật khẩu & gửi email thông báo cho người dùng bị reset (Chưa hoàn thành)
- Quản lý danh mục (thêm/xoá/sửa)(1412624)



## Demo

Link ảnh video demo ứng dụng:

https://www.youtube.com/playlist?list=PLfV0mu6aYtJd-_TBhI-M4oPWX7hH7uZ3g



## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
