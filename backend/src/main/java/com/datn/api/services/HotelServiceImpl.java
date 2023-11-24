package com.datn.api.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.datn.api.entity.HotelDetails;
import com.datn.api.entity.Hotels;
import com.datn.api.entity.Partners;
import com.datn.api.entity.PhotosOfHotel;
import com.datn.api.entity.Provinces;
import com.datn.api.entity.dto.HotelDetailDto;
import com.datn.api.entity.dto.HotelDto;
import com.datn.api.entity.dto.HotelRequest;
import com.datn.api.entity.dto.HotelResponseDto;
import com.datn.api.entity.dto.PartnersDto;
import com.datn.api.entity.dto.PhotosOfHotelsDto;
import com.datn.api.entity.dto.ProvincesDto;
import com.datn.api.enums.HotelStatus;
import com.datn.api.exceptions.NotFoundException;
import com.datn.api.repository.HotelsRepository;
import com.datn.api.repository.PartnerRepository;
import com.datn.api.repository.PhotosOfHotelRepository;
import com.datn.api.repository.ProvincesRepository;

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
	private ProvincesRepository provincesRepository;

	@Autowired
	private PhotosOfHotelRepository photosOfHotelRepository;

	@Autowired
	IStorageService storageService;
	@Autowired
	private PartnerRepository partnerRepository;


	public HotelDto updateHotelForAdmin(HotelDto hotelDto, Long hotelId) {
		// Kiểm tra nếu khách sạn không tồn tại thì không tiến hành cập nhật
		Hotels existingHotel = hotelsRepository.findById(hotelId)
				.orElseThrow(() -> new NotFoundException("Không tìm thấy bài đăng với ID: " + hotelId));
		// Cập nhật thông tin hotel từ HotelDto
		existingHotel.setNameOfHotel(hotelDto.getNameOfHotel());
		existingHotel.setTypeOfHotel(hotelDto.getTypeOfHotel());
		existingHotel.setStandard(hotelDto.getStandard());
		existingHotel.setBreakfast(hotelDto.getBreakfast());
		existingHotel.setServiceFee(hotelDto.getServiceFee());
		existingHotel.setCheckIn(hotelDto.getCheckIn());
		existingHotel.setCheckOut(hotelDto.getCheckOut());
		existingHotel.setStatus(hotelDto.getStatus());
		existingHotel.setDescription(hotelDto.getDescription());
		existingHotel.setChildrenPolicies(hotelDto.getChildrenPolicies());
		existingHotel.setTermAndPolicies(hotelDto.getTermAndPolicies());

		Hotels updatedHotel = hotelsRepository.save(existingHotel);

		return this.hotelDto(updatedHotel);
	}

	// update with province

	public HotelDto updateUnavailableToAvailable(HotelDto hotelDto, Long hotelId) {
		Hotels existingHotel = hotelsRepository.findById(hotelId)
				.orElseThrow(() -> new NotFoundException("Không tìm thấy khách sạn với ID: " + hotelId));
		existingHotel.setNameOfHotel(hotelDto.getNameOfHotel());
		existingHotel.setTypeOfHotel(hotelDto.getTypeOfHotel());
		existingHotel.setStandard(hotelDto.getStandard());
		existingHotel.setBreakfast(hotelDto.getBreakfast());
		existingHotel.setServiceFee(hotelDto.getServiceFee());
		existingHotel.setCheckIn(hotelDto.getCheckIn());
		existingHotel.setCheckOut(hotelDto.getCheckOut());
		existingHotel.setStatus(HotelStatus.Available);
		existingHotel.setDescription(hotelDto.getDescription());
		existingHotel.setChildrenPolicies(hotelDto.getChildrenPolicies());
		existingHotel.setChildrenPolicies(hotelDto.getTermAndPolicies());

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
	public Hotels create(HotelRequest hotelRequest) throws IOException {
		Hotels hotels = new Hotels();
		hotels.setProvinces(provincesRepository.findById(hotelRequest.getProvinceId()).orElseThrow());
		hotels.setPartner(partnerRepository.findById(hotelRequest.getPartnerId()).orElseThrow());
		hotels.setNameOfHotel(hotelRequest.getNameOfHotel());
		hotels.setTypeOfHotel(hotelRequest.getTypeOfHotel());
		hotels.setStandard(hotelRequest.getStandard());
		hotels.setBreakfast(hotelRequest.getBreakfast());
		hotels.setServiceFee(hotelRequest.getServiceFee());
		hotels.setCheckIn(hotelRequest.getCheckIn());
		hotels.setCheckOut(hotelRequest.getCheckOut());
		hotels.setStatus(HotelStatus.Available);
		hotels.setView(0L);
		hotels.setDescription(hotelRequest.getDescription());
		hotels.setChildrenPolicies(hotelRequest.getChildrenPolicies());
		hotels.setTermAndPolicies(hotelRequest.getTermAndPolicies());
		return  hotelsRepository.save(hotels);
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

		Page<Hotels> hotels = hotelsRepository.findHotelByKeyword(keywords, pageable);

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
	public HotelResponseDto findByProvinces(Long id,Integer pageNumber, Integer pageSize) {

		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		Provinces provinces = provincesRepository.findById(id).orElseThrow();
		Page<Hotels> hotels = hotelsRepository.findByProvinces(provinces, pageable);

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
		HotelDto hotelDto = modelMapper.map(hotel, HotelDto.class);
		hotelDto.setPartner(modelMapper.map(hotel.getPartner(),PartnersDto.class));
		hotelDto.setProvince(modelMapper.map(hotel.getProvinces(),ProvincesDto.class));
		List<HotelDetailDto> dtoListDetail = new ArrayList<>();
		for (HotelDetails entity : hotel.getHotelDetails()) {
			HotelDetailDto dto = modelMapper.map(entity,HotelDetailDto.class);
			dtoListDetail.add(dto);
		}
		List<PhotosOfHotelsDto> dtoListPhoto = new ArrayList<>();
		for (PhotosOfHotel entity : hotel.getPhotosOfHotels()) {
			PhotosOfHotelsDto dto = modelMapper.map(entity,PhotosOfHotelsDto.class);
			dtoListPhoto.add(dto);
		}
		hotelDto.setHotelDetails(dtoListDetail);
		hotelDto.setPhotosOfHotels(dtoListPhoto);
		return hotelDto;
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
	public HotelResponseDto findByPartner(String id, Integer pageNumber, Integer pageSize){
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		Partners partners = partnerRepository.findById(id).orElseThrow();
		Page<Hotels> hotels = hotelsRepository.findByPartner(partners, pageable);
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
	public HotelResponseDto getAllHotels(Integer pageNumber, Integer pageSize,String sortDir,String sortBy) {
		Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
				: Sort.by(sortBy).descending();

		// create Pageable instance
		Pageable pageable = PageRequest.of(pageNumber, pageSize,sort);

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
	public List<HotelDto> findAllHotelsByProvince(String provinceID) {
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