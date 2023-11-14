package com.datn.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.datn.api.entity.Hotels;
import com.datn.api.entity.dto.HotelDto;
import com.datn.api.entity.dto.HotelResponseDto;
import com.datn.api.entity.dto.PartnersDto;
import com.datn.api.enums.HotelStatus;
import com.datn.api.exceptions.NotFoundException;
import com.datn.api.repository.HotelsRepository;
import com.datn.api.repository.UsersRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class HotelServiceImpl implements HotelService {
	@Autowired
	private HotelsRepository hotelsRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private UsersServiceImpl usersService;

	@Autowired
	private HttpSession session;
	@Autowired
	private UsersRepository usersRepository;

	// save Hotel with service

	public HotelDto updateHotelForAdmin(HotelDto hotelDto, Long hotelId) {
		// Kiểm tra nếu khách sạn không tồn tại thì không tiến hành cập nhật
		Hotels existingHotel = hotelsRepository.findById(hotelId)
				.orElseThrow(() -> new NotFoundException("Không tìm thấy bài đăng với ID: " + hotelId));
		// Cập nhật thông tin hotel từ HotelDto
		existingHotel.setNameOfHotel(hotelDto.getName_of_hotel());
		existingHotel.setTypeOfHotel(hotelDto.getType_of_hotel());
		existingHotel.setStandard(hotelDto.getStandard());
		existingHotel.setBreakfast(hotelDto.getBreakfast());
		existingHotel.setServiceFee(hotelDto.getService_fee());
		existingHotel.setCheckIn(hotelDto.getCheckIn());
		existingHotel.setCheckOut(hotelDto.getCheck_out());
		existingHotel.setStatus(hotelDto.getStatus());
		existingHotel.setDescription(hotelDto.getDescription());
		existingHotel.setChildrenPolicies(hotelDto.getChildren_Policies());
		existingHotel.setTermAndPolicies(hotelDto.getTerm_And_Policies());

		Hotels updatedHotel = hotelsRepository.save(existingHotel);

		return this.hotelDto(updatedHotel);
	}

	// update with province

	public HotelDto updateUnavailableToAvailable(HotelDto hotelDto, Long hotelId) {
		Hotels existingHotel = hotelsRepository.findById(hotelId)
				.orElseThrow(() -> new NotFoundException("Không tìm thấy khách sạn với ID: " + hotelId));
		existingHotel.setNameOfHotel(hotelDto.getName_of_hotel());
		existingHotel.setTypeOfHotel(hotelDto.getType_of_hotel());
		existingHotel.setStandard(hotelDto.getStandard());
		existingHotel.setBreakfast(hotelDto.getBreakfast());
		existingHotel.setServiceFee(hotelDto.getService_fee());
		existingHotel.setCheckIn(hotelDto.getCheckIn());
		existingHotel.setCheckOut(hotelDto.getCheck_out());
		existingHotel.setStatus(HotelStatus.Available);
		existingHotel.setDescription(hotelDto.getDescription());
		existingHotel.setChildrenPolicies(hotelDto.getChildren_Policies());
		existingHotel.setChildrenPolicies(hotelDto.getTerm_And_Policies());

		Hotels updatedUnavailableHotel = hotelsRepository.save(existingHotel);

		return this.hotelDto(updatedUnavailableHotel);
	}

	public void deleteHotel(Long hotelId, String userId) {
		// Kiểm tra nếu khách sạn không tồn tại thì không tiến hành xóa
		Hotels existingHotel = hotelsRepository.findById(hotelId).orElseThrow(() -> {
			throw new NotFoundException("Không tìm thấy khách sạn với ID: " + hotelId);
		});

		if (!existingHotel.getPartner().getUser().getUserID().equals(userId)) {
			throw new RuntimeException("Bạn không có quyền xóa khách sạn này.");
		}
		// Xóa tất cả các liên kết giữa khách sạn và danh mục
		// service, address?

		// Xóa khách sạn
		hotelsRepository.delete(existingHotel);
	}

	@Override
	public HotelDto save(HotelDto hotelDto) {
		return null;
	}

	@Override
	public HotelDto update(HotelDto hotelDto, Long aLong) {
		return null;
	}

	@Override
	public void delete(Long id) {
		Hotels existingHotel = hotelsRepository.findById(id).orElse(null);
		if (existingHotel == null) {
			throw new NotFoundException("Không tìm thấy bài đăng với ID: " + id);
		}
		// Xóa hotel
		hotelsRepository.delete(existingHotel);
	}

	
	@Override
    public List<HotelDto> findAll() {
        List<Hotels> hotels = this.hotelsRepository.findAll();
        List<HotelDto> hotelDtos = hotels.stream().map(hotel -> this.hotelDto(hotel)).collect(Collectors.toList());
        return hotelDtos;
    }

//	public List<HotelDto> findAllForAdmin() {
//		List<Hotels> hotels = this.hotelsRepository.findAllForAdmin();
//		List<HotelDto> hotelDtos = hotels.stream().map(hotel -> this.hotelDto(hotel)).collect(Collectors.toList());
//		return hotelDtos;
//	}

//	public List<HotelDto> findHotelUnavailable() {
//		List<Hotels> hotels = this.hotelsRepository.findByStatusUnavailable();
//		List<HotelDto> hotelDtos = hotels.stream().map(hotel -> this.hotelDto(hotel)).collect(Collectors.toList());
//		return hotelDtos;
//	}

	@Override
	public HotelDto findById(Long id) {
		Hotels hotel = this.hotelsRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Can't find hotel id: " + id));
		return this.hotelDto(hotel);
	}

	@Override
	public HotelResponseDto findByKeywords(Integer pageNumber, Integer pageSize, String keywords) {

		Pageable pageable = PageRequest.of(pageNumber, pageSize);

		Page<Hotels> hotels = hotelsRepository.findHotelByUserID(keywords, pageable);

		// get content for page object
		List<Hotels> listOfHotels = hotels.getContent();

		List<HotelDto> content = listOfHotels.stream().map(hotel -> this.hotelDto(hotel)).collect(Collectors.toList());
		HotelResponseDto hotelResponse = new HotelResponseDto();
		hotelResponse.setContent(content);
		hotelResponse.setPageNumber(hotels.getNumber());
		hotelResponse.setPageSize(hotels.getSize());
		hotelResponse.setTotalElements(hotels.getTotalElements());
		hotelResponse.setTotalPages(hotels.getTotalPages());
		hotelResponse.setLastPage(hotels.isLast());
		return hotelResponse;

	}

	public HotelResponseDto findByType(Integer pageNumber, Integer pageSize, String type) {
//		if (type.equals("topStandard")) {
//			Pageable pageable = PageRequest.of(pageNumber, pageSize);
//
//			Page<Hotels> hotels = hotelsRepository.findHotelsHighStandard(pageable);
//
//			// get content for page object
//			List<Hotels> listOfHotels = hotels.getContent();
//
//			List<HotelDto> content = listOfHotels.stream().map(hotel -> this.hotelDto(hotel))
//					.collect(Collectors.toList());
//			HotelResponseDto hotelResponse = new HotelResponseDto();
//			hotelResponse.setContent(content);
//			hotelResponse.setPageNumber(hotels.getNumber());
//			hotelResponse.setPageSize(hotels.getSize());
//			hotelResponse.setTotalElements(hotels.getTotalElements());
//			hotelResponse.setTotalPages(hotels.getTotalPages());
//			hotelResponse.setLastPage(hotels.isLast());
//			return hotelResponse;
//		} else if (type.equals("top10views")) {
//			Pageable pageable = PageRequest.of(pageNumber, pageSize);
//
//			Page<Hotels> hotels = hotelsRepository.findHotelsPopular(pageable);
//
//			// get content for page object
//			List<Hotels> listOfHotels = hotels.getContent();
//
//			List<HotelDto> content = listOfHotels.stream().map(hotel -> this.hotelDto(hotel))
//					.collect(Collectors.toList());
//
//			HotelResponseDto hotelResponse = new HotelResponseDto();
//			hotelResponse.setContent(content);
//			hotelResponse.setPageNumber(hotels.getNumber());
//			hotelResponse.setPageSize(hotels.getSize());
//			hotelResponse.setTotalElements(hotels.getTotalElements());
//			hotelResponse.setTotalPages(hotels.getTotalPages());
//			hotelResponse.setLastPage(hotels.isLast());
//			return hotelResponse;
//		} else 
			if (type.equals("")) {
			Pageable pageable = PageRequest.of(pageNumber, pageSize);
			Page<Object[]> list = hotelsRepository.findTop10HotelsWithMostOrdersAndHighestView(pageable);
			List<Long> longList = new ArrayList<>();
			for (int i = 0; i < list.getContent().size(); i++) {
				longList.add((Long) list.getContent().get(i)[3]);
			}
			List<HotelDto> hotelDtoList = hotelsRepository.findAllById(longList).stream()
					.map(hotel -> this.hotelDto(hotel)).collect(Collectors.toList());
			HotelResponseDto hotelResponse = new HotelResponseDto();
			hotelResponse.setContent(hotelDtoList);
			hotelResponse.setPageNumber(list.getNumber());
			hotelResponse.setPageSize(list.getSize());
			hotelResponse.setTotalElements(list.getTotalElements());
			hotelResponse.setTotalPages(list.getTotalPages());
			hotelResponse.setLastPage(list.isLast());
			return hotelResponse;
		} else {

			throw new NotFoundException("Không tìm thấy Hotels theo Type");
		}
	}

	public Hotels dtoToHotel(HotelDto hotelDto) {
		return this.modelMapper.map(hotelDto, Hotels.class);
	}

	public HotelDto hotelDto(Hotels hotel) {
		try {
			HotelDto hotelDto = new HotelDto();
			hotelDto.setId(hotel.getHotel_ID());
			hotelDto.setName_of_hotel(hotel.getNameOfHotel());
			hotelDto.setType_of_hotel(hotel.getTypeOfHotel());
			hotelDto.setStandard(hotel.getStandard());
			hotelDto.setBreakfast(hotel.getBreakfast());
			hotelDto.setService_fee(hotel.getServiceFee());
			hotelDto.setCheckIn(hotel.getCheckIn());
			hotelDto.setCheck_out(hotel.getCheckOut());
			hotelDto.setStatus(hotel.getStatus());
			hotelDto.setDescription(hotel.getDescription());
			hotelDto.setChildren_Policies(hotel.getChildrenPolicies());
			hotelDto.setTerm_And_Policies(hotel.getTermAndPolicies());
			hotelDto.setView(hotel.getView());
//            UsersDto usersDto = this.usersService.findById(hotel.getUser().getUserId());
			hotelDto.setPartners(this.modelMapper.map(hotel.getPartner(), PartnersDto.class));
			return hotelDto;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

//	public List<HotelDto> findAllHotelByUserId(String userId) {
//		List<Hotels> hotels = this.hotelsRepository.findAllHotelByUserId(userId);
//		List<HotelDto> hotelDtoList = hotels.stream().map(hotel -> this.hotelDto(hotel)).collect(Collectors.toList());
//		return hotelDtoList;
//	}

	// save by address not yet

	public void autoIncreaseViews(Long hotelID) {
		List<Long> historyHotel = (List<Long>) session.getAttribute("historyHotel");
		if (historyHotel == null) {
			historyHotel = new ArrayList<>();
		}

		boolean hotelExists = false;
		for (Long id : historyHotel) {
			if (id.equals(id)) {
				hotelExists = true;
				break;
			}
		}

		if (!hotelExists) {
			historyHotel.add(hotelID);
			session.setAttribute("historyHotel", historyHotel);
			hotelsRepository.autoIncreaseViews(hotelID);
		}
	}

	@Override
	public HotelResponseDto getAllHotels(Integer pageNumber, Integer pageSize) {
//		Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
//				: Sort.by(sortBy).descending();

		// create Pageable instance
		Pageable pageable = PageRequest.of(pageNumber, pageSize);

		Page<Hotels> hotels = hotelsRepository.findAll(pageable);

		// get content for page object
		List<Hotels> listOfHotels = hotels.getContent();

		List<HotelDto> content = listOfHotels.stream().map(hotel -> this.hotelDto(hotel)).collect(Collectors.toList());

		HotelResponseDto hotelResponse = new HotelResponseDto();
		hotelResponse.setContent(content);
		hotelResponse.setPageNumber(hotels.getNumber());
		hotelResponse.setPageSize(hotels.getSize());
		hotelResponse.setTotalElements(hotels.getTotalElements());
		hotelResponse.setTotalPages(hotels.getTotalPages());
		hotelResponse.setLastPage(hotels.isLast());

		return hotelResponse;
	}

	@Override
	public List<HotelDto> findAllHotelsByProvince(String proviceId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer sumHotelsViewOfUser(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer numberOrderOfHotel(String id) {
		// TODO Auto-generated method stub
		return null;
	}

}