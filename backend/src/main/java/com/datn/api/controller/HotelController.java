package com.datn.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datn.api.entity.dto.HotelDto;
import com.datn.api.entity.dto.HotelResponseDto;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.HotelServiceImpl;

@RestController
@RequestMapping("/api/v1/posts")
public class HotelController {
    @Autowired
    HotelServiceImpl hotelService;

    

    @GetMapping("")
    public ApiResponse<HotelResponseDto> getPostsByType(
            @RequestParam(value = "q", defaultValue = "", required = false) String keywords,
            @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
            @RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
            @RequestParam(value = "sortBy", defaultValue = "title", required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
            @RequestParam(value = "type", required = false) Optional<String> type) {
        if (type.isPresent()) {
            HotelResponseDto postResponse = this.hotelService.findByType(pageNumber, pageSize, type.get());
            return ApiResponse.success(HttpStatus.OK, "success", postResponse);
        }
        return ApiResponse.success(HttpStatus.OK, "success", hotelService.getAllHotels(pageNumber, pageSize, sortBy, sortDir));
    }

    @GetMapping("/increase-view/{id}")
    public ApiResponse<?> increaseViews(
            @PathVariable("id") Long id) {
        hotelService.autoIncreaseViews(id);
        return ApiResponse.success(HttpStatus.OK, "View đã tăng", null);
    }

    @GetMapping("/{id}")
    public ApiResponse<HotelDto> getPost(
            @PathVariable("id") Long id) {
        HotelDto hotel = hotelService.findById(id);
        String successMessage = "Tìm thấy post có id " + id;
        return ApiResponse.success(HttpStatus.OK, successMessage, hotel);
    }

    

    @PutMapping("/{hotelId}")
    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
    public ApiResponse<HotelDto> updatePost(@RequestBody HotelDto hotelDto,
                                           @PathVariable Long hotelID) {
        HotelDto updateHotel = hotelService.update(hotelDto, hotelID);
        String successMessage = "Cập nhật bài đăng thành công!";
        return ApiResponse.success(HttpStatus.OK, successMessage, updateHotel);
    }

    @DeleteMapping("/{postId}")
    @PreAuthorize("hasAnyAuthority('PARTNER','ADMIN')")
    public ApiResponse<HotelDto> deleteHotel(@PathVariable("hotelID") Long hotelID) {
        hotelService.delete(hotelID);
        String successMessage = "Xóa bài đăng thành công!";
        return ApiResponse.success(HttpStatus.OK, successMessage, null);
    }

    @GetMapping("/draft")
    @PreAuthorize("hasAnyAuthority('PARTNER','ADMIN')")
    public ApiResponse<?> getAllDraftPost() {
        List<HotelDto> hotelDtos = this.hotelService.findHotelUnavailable();
        return ApiResponse.success(HttpStatus.OK, "", hotelDtos);
    }

    @GetMapping("/search")
    public ApiResponse<HotelResponseDto> search(@RequestParam(value = "q", defaultValue = "", required = false) String keywords,
                                               @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                               @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize
                                               ) {
        return ApiResponse.success(HttpStatus.OK, "sucesss", hotelService.findByKeywords(pageNumber, pageSize, keywords));
    }




    // with hotel //order
//    @GetMapping("/{postId}/comments")
//    public ResponseEntity<List<CommentDto>> getListComment(@PathVariable Long postId) {
//        List<CommentDto> commentDtoList = commentService.findAllCommentByPostId(postId);
//        return ResponseEntity.ok(commentDtoList);
//    }
//
//
//    @PostMapping("/{postId}/comments")
//    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
//    public ApiResponse<CommentDto> create(@PathVariable Long postId, @PathVariable Optional<Long> commentId,
//                                          @RequestBody CommentDto commentDto) {
//        return ApiResponse.success(HttpStatus.OK, "success",
//                commentService.saveNewComment(commentDto, postId, commentId));
//    }
//
//
//    @PostMapping("/{postId}/comments/reply/{commentId}")
//    @PreAuthorize("hasAnyAuthority('USER','ADMIN')")
//    public ApiResponse<CommentDto> reply(@PathVariable Long postId, @PathVariable Optional<Long> commentId,
//                                         @RequestBody CommentDto commentDto) {
//        return ApiResponse.success(HttpStatus.OK, "success",
//                commentService.saveNewComment(commentDto, postId, commentId));
//    }

}
