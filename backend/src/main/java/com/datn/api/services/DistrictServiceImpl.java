package com.datn.api.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.datn.api.entity.Districts;
import com.datn.api.entity.dto.DistrictDto;
<<<<<<< HEAD
import com.datn.api.entity.dto.ProvinceDto;
=======
>>>>>>> services-test
import com.datn.api.repository.DistrictRepository;

@Service
public class DistrictServiceImpl implements DistrictService {

	@Autowired
	ModelMapper modelMapper;

	@Autowired
	DistrictRepository districtRepository;

	@Override
	public DistrictDto save(DistrictDto entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DistrictDto update(DistrictDto entity, Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<DistrictDto> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DistrictDto findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<DistrictDto> findByProvince(Long provinceID) {
		List<Districts> districts = this.districtRepository.findByProvinces(provinceID);
		List<DistrictDto> districtDtos = districts.stream()
				.map(district -> this.districtDto(district)).collect(Collectors.toList());
		return districtDtos;
	}

	public Districts dtoToDistrict(DistrictDto districtDto) {
		return this.modelMapper.map(districtDto, Districts.class);
	}

	public DistrictDto districtDto(Districts districts) {
		try {
			DistrictDto districtDto = new DistrictDto();
			districtDto.setDistrictID(districts.getDistrictID());
			districtDto.setNameOfDistrict(districts.getNameOfDistrict());
<<<<<<< HEAD
			districtDto.setProvince(this.modelMapper.map(districts.getProvinces(), ProvinceDto.class));
=======
//			districtDto.setProvince(this.modelMapper.map(districts.getProvinces(), ProvinceDto.class));
>>>>>>> services-test
			return districtDto;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
