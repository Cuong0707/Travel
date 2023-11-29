import React, { useState, useEffect } from "react";

import "../../style/Hotel/Booking.scss";
import { Link } from "react-router-dom";
import ScrollToTop from "../../Services/ScrollToTop";
const Booking = () => {

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const infoUserString = localStorage.getItem('infoUser');
    const infoUser = JSON.parse(infoUserString);
    setUserInfo(infoUser);
  }, []);

  return (
    <div className="container-booking">
      <div className="container mt-5 bp_pricedetails_holder bp_pricedetails_legibility">
        <div className="">
          <div className="bp_sidebar_content_block bp_sidebar_content_block--bookingdetails_summary">
            <div className="bp_sidebar_content_block__header">
              <div className="bp_sidebar_content_block__header_title">
                Thông Tin Của Bạn

              </div>
            </div>
            <div className="bp_sidebar_content_block__section">
              <ul className="bp_sidebar_content_block__ul">
                <li className="bp_sidebar_content_block__li">
                  <div className="bp_sidebar_content_block__li_title">
                    Họ Tên: <span className="text-danger">{userInfo.fullname}</span>

                  </div>
                </li>
                <li className="bp_sidebar_content_block__li">
                  <div className="bp_sidebar_content_block__li_title">
                    Số Điện Thoại: <span className="text-danger">{userInfo.phone_number}</span>

                  </div>
                </li>
                <li className="bp_sidebar_content_block__li bp_sidebar_content_block__li--last">
                  <div className="bp_sidebar_content_block__li_title ">
                    Địa Chỉ Email: <span className="text-danger">{userInfo.email}</span>

                  </div>
                </li>
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bp_pricedetails_box">
            <div className="bp_sidebar_content_block__header bp_sidebar_content_block__header--price_details ">
              <div className="bp_sidebar_content_block__header_title">
                Tóm tắt giá của bạn
              </div>
            </div>
            <div className="bp_pricedetails_fauxtable">
              <ul className="bp_pricedetails_breakdown">
                <li className="bp_pricedetails_room">
                  <span className="bp_pricedetails_room_name">
                    La Vela Luxury Deluxe Twin
                  </span>
                </li>
              </ul>
            </div>
            <div className="bp_pricedetails_total">
              <div className="tpi_bp_total_price_block bui-u-clearfix">
                <span className="bp_pricedetails_total_name">Giá Gốc</span>
                <span
                  className="jq-tooltip bp_pricedetails_total_value">
                  VND&nbsp;3,088,347
                </span>
              </div>
            </div>
            <div className="bp_pricedetails_fauxtable">
              Giá Ưu Đãi
              <span
                className="jq-tooltip bp_pricedetails_total_value text-success fw-bold">
                VND&nbsp;2,500,000
              </span>
            </div>
            <div className="bp_pricedetails_fauxtable fw-bold text-uppercase">
              Tổng Tiền
              <span
                className="jq-tooltip bp_pricedetails_total_value text-success fw-bold">
                VND&nbsp;2,500,000
              </span>
            </div>
          </div>
          <div className="">
            <div>
              <div className="da48633ced b1a676be74">
                <div className="e64dc2a754">
                  <div className="bb3ab2d4b6">
                    Xem lại điều kiện đặt phòng của bạn
                  </div>
                </div>
                <div className="bd6ed0d925">
                  <div className="bdcd217dc6">Ưu đãi dành cho đối tác</div>
                  <ul className="e0c5089316">
                    <li>
                      Bạn sẽ không thể thay đổi thông tin cá nhân hoặc thông tin đặt chỗ sau khi việc đặt chỗ của bạn hoàn tất
                    </li>
                    <li>
                      Hóa đơn sẽ do công ty đối tác của chúng tôi phát hành
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* .bp_sidebar_content_block */}
        </div>
        {/* .bp_sidebar_content_block__section */}
      </div>
      {/* .bp_sidebar_content_block */}
      <div className="col-12 ">
        <div className=" bp_hotel_details_holder clearfix ">
          <div className="bp_hotel_photo  mt-5">
            <div className="bp_small_gallery bp_unselectable bp_hotel_gallery">
              <img
                className="bp_small_gallery_main_img jq_tooltip"
                src="https://cf.bstatic.com/xdata/images/hotel/square200/464640824.webp?k=d4a1215d9b73b1ead0809cb66500710654b42e832d1bdb1fd13243285132c5b7&amp;o="
                tabindex="0"
                id="b_tt_holder_1"
                aria-describedby="materialized_tooltip_9v6y0" alt=""
              />
              <i className=" bp_small_gallery_arrow bp_small_gallery_arrow__m-back"></i>
              <i className="bp_small_gallery_arrow bp_small_gallery_arrow__m-forward"></i>
              <ins className="bp_small_gallery_counter">
                <ins className="bp_small_gallery_counter_current"></ins>/
                <ins className="bp_small_gallery_counter_total"></ins>
              </ins>
            </div>
            <div className="bp_hotel_photo_previews_holder">
              <img
                className="bp_hotel_photo_preview jq_tooltip"
                tabindex="0"
                src="https://cf.bstatic.com/xdata/images/hotel/square200/409837721.webp?k=208005ce365c8eda09f1c7eb5b0efcfa09a18d74ef31c7e82f1d8d1ebf348bd5&amp;o="
                data-title="<img src='https://cf.bstatic.com/xdata/images/hotel/max400/409837721.webp?k=208005ce365c8eda09f1c7eb5b0efcfa09a18d74ef31c7e82f1d8d1ebf348bd5&amp;o='>"
                alt="" />
              <div className="bp_hotel_photo_preview_delimiter"></div>
              <img
                className="bp_hotel_photo_preview jq_tooltip"
                tabindex="0"
                src="https://cf.bstatic.com/xdata/images/hotel/square200/325222137.webp?k=c6ffb6a7801d27158299a8398732e1df621d8f15f4ab0432bf878bcc848d6e1f&amp;o="
                data-title="<img src='https://cf.bstatic.com/xdata/images/hotel/max400/325222137.webp?k=c6ffb6a7801d27158299a8398732e1df621d8f15f4ab0432bf878bcc848d6e1f&amp;o='>"
                id="b_tt_holder_2"
                aria-describedby="materialized_tooltip_8vr5w" alt=""
              />
              <div className="bp_hotel_photo_preview_delimiter"></div>
              <img
                className="bp_hotel_photo_preview jq_tooltip"
                tabindex="0"
                src="https://cf.bstatic.com/xdata/images/hotel/square200/323320716.webp?k=5420b8830981da382f9c5c69a2a6605c03663377bb2e37f9c19ad8e67226ac07&amp;o="
                data-title="<img src='https://cf.bstatic.com/xdata/images/hotel/max400/323320716.webp?k=5420b8830981da382f9c5c69a2a6605c03663377bb2e37f9c19ad8e67226ac07&amp;o='>"
                id="b_tt_holder_4"
                aria-describedby="materialized_tooltip_zk5db" alt=""
              />
              <div className="bp_hotel_photo_preview_delimiter"></div>
              <img
                className="bp_hotel_photo_preview jq_tooltip"
                tabindex="0"
                src="https://cf.bstatic.com/xdata/images/hotel/square200/257934272.webp?k=a10f5f5dc8b06e9e41a4fb27bb051a738a3c34a4ce4a67535ab9275e004a5901&amp;o="
                data-title="<img src='https://cf.bstatic.com/xdata/images/hotel/max400/257934272.webp?k=a10f5f5dc8b06e9e41a4fb27bb051a738a3c34a4ce4a67535ab9275e004a5901&amp;o='>"
                id="b_tt_holder_5"
                aria-describedby="materialized_tooltip_pvog9" alt=""
              />
            </div>
          </div>
          <div className="bp_hotel_details">
            <div className="bp_hotel_name bp_hotel_name_pref bp_hotel_name_even_bigger  mt-5">
              <div className="bp_hotel_name_title">La Vela Saigon Hotel</div>
              <span className="nowrap">
                <i
                  className="bk-icon-wrapper bk-icon-stars star_track"
                  title="5-star hotel"
                >
                  <svg
                    aria-hidden="true"
                    className="bk-icon -sprite-ratings_stars_5"
                    focusable="false"
                    height="10"
                    width="54"
                    viewBox="0 0 65 12"
                    role="presentation"
                  >
                    <path
                      d="m13 4.6c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.1-.5-.1-.5 0l-1.5 4-4.6.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3h.3l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.4 3.5-2.5c.1 0 .1-.1.1-.2zm13 0c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.2-.4-.2-.5 0l-1.5 4-4.5.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3s.2.1.3 0l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.3 3.5-2.5zm13 0c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.2-.4-.2-.5 0l-1.5 4-4.5.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3s.2.1.3 0l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.3 3.5-2.5zm13 0c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.2-.4-.2-.5 0l-1.5 4-4.5.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3s.2.1.3 0l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.3 3.5-2.5zm13 0c0-.1-.1-.2-.2-.2l-4.5-.3-1.5-4c-.1-.2-.4-.2-.5 0l-1.5 4-4.5.3c-.1 0-.2.1-.2.2s0 .2.1.3l3.5 2.5-1.2 4.3c0 .1 0 .2.1.3s.2.1.3 0l3.7-2.6 3.7 2.6h.3c.1-.1.1-.2.1-.3l-1.2-4.3 3.5-2.5z"
                      fill="#feba02"
                    ></path>
                  </svg>
                  <span className="invisible_spoken">5-star hotel</span>
                </i>
                <svg
                  aria-hidden="true"
                  className="bk-icon -iconset-thumbs_up_square"
                  fill="#FEBB02"
                  height="20"
                  rel="300"
                  width="20"
                  viewBox="0 0 128 128"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z"></path>
                </svg>
              </span>

            </div>
            <div className="hotel-address">
              <div className="hotel-address-text">
                <i className="hotel-address-map-icon"></i>
                <span className="hotel-address-text-wrap">
                  <span className="hotel-address-text-address">
                    280 Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3, Thành phố Hồ Chí Minh, Việt Nam
                  </span>
                </span>
              </div>
            </div>
            <div className="bp_hotel_great_location">
              Khách sạn này nằm ở một vị trí tốt.
            </div>
          </div>
          <div className="content bp_legacy_form_box__content mt-4">
            <div className="required_fields_description">
              Sắp xong! Chỉ cần điền <b className="text-danger">*</b> thông tin bắt buộc
            </div>
            <div className="bp-personal-details-form">
              <div className="tpi-form__flexible-fields">
                <div className="mt-2 row">
                  <div className="col-5">
                    <label htmlFor="booker_title" className="tpi-form__label">
                      <span>Số Lượng Phòng</span>
                      <abbr className="mandatory-asterisk" title="Required">
                        {" "}
                        *
                      </abbr>
                    </label>
                    <select className="ms-2">
                      <option></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-3 row">

                <div className="row tpi-form__flexible-fields__name-wrapper">
                  <div className="col-md-4">
                    <label htmlFor="fullname" className="tpi-form__label">
                      <span className="tpi-form__label-text">Họ Và Tên</span>
                      <abbr className="mandatory-asterisk" title="Required">
                        {" "}
                        *
                      </abbr>
                    </label>
                    <div className="">
                      <input type="text" className="form-control mb-2" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="email" className="tpi-form__label">
                      <span className="tpi-form__label-text">Địa Chỉ Email</span>
                      <abbr className="mandatory-asterisk" title="Required">
                        {" "}
                        *
                      </abbr>
                    </label>
                    <div className="">
                      <input type="email" className="form-control mb-2" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="phone" className="tpi-form__label">
                      <span className="tpi-form__label-text">Số Điện Thoại</span>
                      <abbr className="mandatory-asterisk" title="Required">
                        {" "}
                        *
                      </abbr>
                    </label>
                    <div className="">
                      <input type="text" className="form-control mb-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="NumberChildren" className="tpi-form__label">
                    <span className="tpi-form__label-text">Số Lượng Trẻ Em</span>
                    <abbr className="mandatory-asterisk" title="Required">
                      {" "}
                      *
                    </abbr>
                  </label>
                  <div className="tpi-form__field-validation-container">
                    <input
                      type="number"
                      id="NumberChildren"
                      className="form-control mb-2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="NumberPeople" className="tpi-form__label">
                    <span className="tpi-form__label-text">Số Lượng Người</span>
                    <abbr className="mandatory-asterisk" title="Required">
                      {" "}
                      *
                    </abbr>
                  </label>
                  <div className="tpi-form__field-validation-container">
                    <input
                      type="number"
                      id="NumberChildren"
                      className="form-control mb-2"
                    />
                  </div>
                </div>
              </div >
            </div >
            <ScrollToTop><Link to="/pay">
              <button className="submit_holder_button mt-3" type="submit" name="book">
                Tiến Hành Thanh Toán
              </button>
            </Link></ScrollToTop>
          </div >
        </div >
      </div >
    </div >
  );
};
export default Booking;
