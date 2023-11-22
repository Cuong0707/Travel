package com.datn.api.entity.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProvinceDto {
	private Long provinceID;
	private String nameOfProvince;
	private String featuredImage;
	private List<DistrictDto> district;
}
