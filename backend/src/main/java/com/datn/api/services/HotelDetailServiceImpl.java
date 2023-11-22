package com.datn.api.services;

import com.datn.api.entity.HotelDetails;
import com.datn.api.entity.Hotels;
import com.datn.api.entity.dto.HotelDetailDto;
import com.datn.api.entity.dto.HotelDetailResponse;
import com.datn.api.entity.dto.HotelDetailsRequest;
import com.datn.api.exceptions.NotFoundException;
import com.datn.api.repository.HotelsDetailsRepository;
import com.datn.api.repository.HotelsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class HotelDetailServiceImpl implements HotelDetailService{

    @Autowired
    HotelsRepository hotelsRepository;
    @Autowired
    HotelsDetailsRepository hotelsDetailsRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public HotelDetails createHotelsDetail(HotelDetailsRequest hotelDetailsRequest){
        try {
            Hotels hotel = this.hotelsRepository.findById(hotelDetailsRequest.getHotelId())
                    .orElseThrow(() -> new NotFoundException("Can't find hotel id: " + hotelDetailsRequest.getHotelId()));
            HotelDetails hotelDetails = new HotelDetails();
            hotelDetails.setHotelDetailID(hotelDetailsRequest.getHotelDetailID());
            hotelDetails.setHotels(hotel);
            hotelDetails.setHighlights(hotelDetailsRequest.getHighlights());
            hotelDetails.setAreaOfRoom(hotelDetailsRequest.getAreaOfRoom());
            hotelDetails.setPhotosOfRoom(hotelDetailsRequest.getPhotosOfRoom());
            hotelDetails.setAmountOfRoom(hotelDetailsRequest.getAmountOfRoom());
            hotelDetails.setPriceOfRoom(hotelDetailsRequest.getPriceOfRoom());
            hotelDetails.setSizeOfBed(hotelDetailsRequest.getSizeOfBed());
            hotelDetails.setTypeOfBed(hotelDetailsRequest.getTypeOfBed());
            hotelDetails.setTypeOfRoom(hotelDetailsRequest.getTypeOfRoom());
            return hotelsDetailsRepository.save(hotelDetails);
        }catch (Exception e){
            throw new RuntimeException("Thêm thất bại");
        }
    }
    @Override
    public HotelDetails updateHotelsDetail(HotelDetailsRequest hotelDetailsRequest){
        try {
            Hotels hotel = this.hotelsRepository.findById(hotelDetailsRequest.getHotelId())
                    .orElseThrow(() -> new NotFoundException("Can't find hotel id: " + hotelDetailsRequest.getHotelId()));
            HotelDetails hotelDetails = hotelsDetailsRepository.findById(hotelDetailsRequest.getHotelDetailID()).orElseThrow();
            hotelDetails.setHotels(hotel);
            hotelDetails.setHighlights(hotelDetailsRequest.getHighlights());
            hotelDetails.setAreaOfRoom(hotelDetailsRequest.getAreaOfRoom());
            hotelDetails.setPhotosOfRoom(hotelDetailsRequest.getPhotosOfRoom());
            hotelDetails.setAmountOfRoom(hotelDetailsRequest.getAmountOfRoom());
            hotelDetails.setPriceOfRoom(hotelDetailsRequest.getPriceOfRoom());
            hotelDetails.setSizeOfBed(hotelDetailsRequest.getSizeOfBed());
            hotelDetails.setTypeOfBed(hotelDetailsRequest.getTypeOfBed());
            hotelDetails.setTypeOfRoom(hotelDetailsRequest.getTypeOfRoom());
            return hotelsDetailsRepository.save(hotelDetails);
        }catch (Exception e){
            throw new RuntimeException("Cập nhật thất bại");
        }
    }
    @Override
    public HotelDetailResponse getAllHotelDetail(Integer pageNumber, Integer pageSize, String sortDir, String sortBy){
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNumber, pageSize,sort);

        Page<HotelDetails> hotels = hotelsDetailsRepository.getAll(pageable);

        List<HotelDetails> hotelDetailsList = hotels.getContent();


        List<HotelDetailDto> content = hotelDetailsList.stream().map(this::hotelDetailDto).toList();

        HotelDetailResponse hotelResponse = new HotelDetailResponse();
        hotelResponse.setContent(content);
        hotelResponse.setPageNumber(hotels.getNumber());
        hotelResponse.setPageSize(hotels.getSize());
        hotelResponse.setTotalElements(hotels.getTotalElements());
        hotelResponse.setTotalPages(hotels.getTotalPages());
        hotelResponse.setLastPage(hotels.isLast());
        return hotelResponse;
    }

    @Override
    public HotelDetailDto getOneHotelDetail(Long id){
        Optional<HotelDetails> hotelDetails = hotelsDetailsRepository.findById(id);
        if(hotelDetails.isPresent()){
            return hotelDetailDto(hotelDetails.get());
        }
        throw new NotFoundException("Not found hotelDetail with id"+id);
    }
    public HotelDetails dtoToHotelDetail(HotelDetailDto hotelDetailDto) {
        return this.modelMapper.map(hotelDetailDto, HotelDetails.class);
    }

    public HotelDetailDto hotelDetailDto(HotelDetails hotelDetails) {
        HotelDetailDto hotelDetailDto = modelMapper.map(hotelDetails, HotelDetailDto.class);
        hotelDetailDto.setHotelId(hotelDetails.getHotels().getHotel_ID());
        return hotelDetailDto;
    }


}
