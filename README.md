# Project - *Auction website*

**Auction website** là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1412689** - Hoàng Thị Bích Vân - 1412689 - hoangthibichvan95@gmail.com - 50%
* [x] **1412624** - Nguyễn Quốc Anh Tú - nqatu - ngqanhtu@outlook.com - 50%


URL: **http://project-auction.azurewebsites.net**
Báo cáo: ****

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
* [x] AJAX (1412624)

## Bảo mật
* [x] Chứng thực (MSSV1)
* [x] Phân quyền sử dụng một số trang web với nhiều vai trò khác nhau (1412624)
   * [x] Không cho phép thao tác vào trang web khi không có quyền (1412624)
   * [x] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau (1412624)
   * [x] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (1412624)

## Nâng cao
* [ ] ...

## Chức năng đã thực hiện
Các **yêu cầu chức năng** (check và ghi MSSV vào các phần chức năng đã thực hiện)

# 1. Phân hệ người dùng anonymous
## Trang chủ
- Top 4 sản phẩm có nhiều lượt ra giá nhất (sắp xếp theo số lượt giảm dần)
- Top 4 sản phẩm chưa kết thúc có giá cao nhất
- Top 4 sản phẩm gần kết thúc(sắp xếp theo thời gian kết thúc giảm dần)
## Hệ thống Menu
- Hiển thị danh sách loại sản phẩm
## Tìm kiếm sản phẩm
- Cho phép tìm kiếm theo nhiều tiêu chí: tên, loại, ... 
- Hỗ trợ phân trang truyền thống
- Hỗ trợ sắp xếp lại kết quả tìm kiếm (thời gian kết thúc giảm, giá tăng, ...) 
- Những sản phẩm mới đăng trong N phút có thể hiện khác -0.25
- Đầy đủ thông tin: tên, hình ảnh, giá hiện tại, người giữ giá (có mã hoá, vd nndkhoa sẽ được thể hiện dạng n*d*h*a), thời gian còn lại, số lượt ra giá hiện có
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
## Lưu 1 sản phẩm vào danh sách yêu thích (Watch List) 
- View tìm sản phẩm
- View xem chi tiết sản phẩm
## Ra giá 1 sản phẩm ở view xem chi tiết sản phẩm 
- View xem chi tiết sản phẩm
- Có kiểm tra điểm đánh giá lớn hơn 80% mới cho ra giá 
- Có đề nghị giá hợp lệ nhỏ nhất (giá hiện tại + bước giá) 
- Có xác nhận trước khi đặt giá 
## Xem lịch sử đấu giá của sản phẩm 
## Quản lý hồ sơ cá nhân
- Đổi thông tin cá nhân, mật khẩu
- Xem chi tiết đánh giá và % điểm của bản thân 
## Xem danh sách sản phẩm yêu thích (watch list)
- Cho phép mở nhanh 1 sản phẩm từ danh sách
## Xem danh sách sản phẩm đang tham gia đấu giá (bidding list)
- Cho phép mở nhanh 1 sản phẩm từ danh sách
- Sản phẩm bản thân đang đang giữ giá có thể hiện khác với sản phẩm người khác giữ giá 
## Xem danh sách sản phẩm bản thân đã thắng (won list) 
- Cho phép mở nhanh 1 sản phẩm từ danh sách
## Đánh giá người bán
## Xin nâng cấp thành tài khoản người bán
# 3. Phân hệ quản trị (Admin)
- Duyệt yêu cầu xin được nâng cấp tài khoản thành tài khoản bán 
- Quản lý sản phẩm, loại sản phẩm, nhà sản xuất 
- Quản lý danh sách người dùng 
- Xoá người dùng 
- Reset mật khẩu & gửi email thông báo cho người dùng bị reset 
- Quản lý danh mục (thêm/xoá/sửa)



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
