import 'dart:convert';

import 'package:http/http.dart';
import 'package:snap_crescent/models/base_response_bean.dart';
import 'package:snap_crescent/models/photo.dart';
import 'package:snap_crescent/resository/photo_resository.dart';
import 'package:snap_crescent/resository/thumbnail_resository.dart';

class PhotoService {
  
  Future<BaseResponseBean<int, Photo>> search() async {
    Response response = await get(Uri.parse("http://192.168.0.61:8080/photo?resultType=SEARCH&page=0&size=1000&sort=photo.id&sortDirection=desc"));

    if (response.statusCode == 200) {
      return BaseResponseBean.fromJson(jsonDecode(response.body), Photo.fromJsonModel);
    } else {
      throw "Unable to retrieve photos.";
    }
  }

  Future<BaseResponseBean<int, Photo>> getById(int photoId) async {
    Response res = await get(Uri.parse("http://192.168.0.61:8080/photo/" + photoId.toString()));

    if (res.statusCode == 200) {
      return BaseResponseBean.fromJson(jsonDecode(res.body), Photo.fromJsonModel);
    } else {
      throw "Unable to retrieve photos.";
    }
  }

  Future<int> saveAllOnLocal(List<Photo> entities) async {
    entities.forEach((entity) {
      saveOnLocal(entity);
     });

    return Future.value(0);

  }

  Future<int> saveOnLocal(Photo entity) async {
    final photoExistsById = await PhotoResository.instance.existsById(entity.id!);

    if(photoExistsById == false) {
      final thumbnailExistsById = await ThumbnailResository.instance.existsById(entity.thumbnailId!);

      if(thumbnailExistsById == false) {
          ThumbnailResository.instance.save(entity.thumbnail!);
      }
      
      return PhotoResository.instance.save(entity);
    } else {
      return Future.value(0);
    } 
  }

  Future<List<Photo>> searchOnLocal() async {
    final localPhotosMap =  await PhotoResository.instance.findAll();
    return new List<Photo>.from(localPhotosMap.map((photoMap) => Photo.fromMap(photoMap)).toList());
  }

  Future<int> findNextById(int photoId) async {
    return PhotoResository.instance.findNextById(photoId);
  }

  Future<int> findPreviousById(int photoId) async {
    return PhotoResository.instance.findNextById(photoId);
  }
  
}
